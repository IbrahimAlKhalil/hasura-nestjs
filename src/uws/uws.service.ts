import { SessionVariable } from '../typings/session-variable';
import { INanoexpressApp, IWebSocket } from 'nanoexpress';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Injectable, Logger } from '@nestjs/common';
import { RedisClient } from '../redis/redis.client';
import { AuthService } from '../auth/auth.service';
import { HttpAdapterHost } from '@nestjs/core';
import { Config } from '../config/config';

@Injectable()
export class UwsService {
  constructor(
    private readonly redisPubClient: RedisClient,
    private readonly adapter: HttpAdapterHost,
    private readonly authService: AuthService,
    private eventEmitter: EventEmitter2,
    private readonly config: Config,
  ) {
    this.init().then(
      () => this.logger.log(`Websocket server initialized at ${config.websocket.endpoint}`),
    );
  }

  private server: INanoexpressApp = this.adapter.httpAdapter.getInstance()._app;
  private readonly redisSubClient = this.redisPubClient.duplicate();
  private readonly logger = new Logger(UwsService.name);

  private async init(): Promise<void> {
    this.server.ws(this.config.websocket.endpoint, {
      maxBackpressure: this.config.websocket.maxBackpressure,
      idleTimeout: this.config.websocket.idleTimeout,
      maxPayloadLength: this.config.websocket.maxPayloadLength,

      upgrade: async (res, req, ctx) => {
        let aborted = false;

        res.onAborted(() => {
          aborted = true;
        });

        const key = req.getHeader('sec-websocket-key');
        const protocol = req.getHeader('sec-websocket-protocol');
        const extension = req.getHeader('sec-websocket-extensions');

        const vars = await this.authService.authorize(
          req.getHeader('cookie'),
          req.getHeader('x-csrf-token'),
        );

        if (aborted) {
          return;
        }

        if (vars['x-hasura-role'] === 'anonymous') {
          return res.cork(() => {
            res.writeStatus('401 Unauthorized');
            res.end();
          });
        }

        if (this.server.numSubscribers(vars['x-hasura-user-id']) >= this.config.websocket.maxConnections) {
          return res.cork(() => {
            res.writeStatus('429 Too Many Requests');
            res.end();
          });
        }

        if (aborted) {
          return;
        }

        res.upgrade(
          { sv: vars },
          key,
          protocol,
          extension,
          ctx,
        );
      },

      message: (websocket, message, isBinary) => {
        if (isBinary) {
          return websocket.close();
        }

        try {
          const arr = JSON.parse(Buffer.from(message).toString('utf-8'));

          if (!Array.isArray(arr) || arr.length !== 2 || typeof arr[0] !== 'string') {
            return;
          }

          this.eventEmitter.emitAsync(`ws.${arr[0]}`, websocket, arr[1]);
        } catch (e) {
          //
        }
      },

      open: (websocket: IWebSocket) => {
        websocket.subscribe(websocket.sv['x-hasura-user-id']);
        this.eventEmitter.emitAsync('wsi.open', websocket);
      },

      close: (websocket) => {
        this.eventEmitter.emitAsync('wsi.close', websocket);
      },
    });

    this.redisSubClient.on('message', (channel, message) => {
      if (channel === this.config.websocket.redisChannel) {
        const messageObj = JSON.parse(message);
        this.server.publish(messageObj[0], messageObj[1], false);
      }
    });

    this.redisSubClient.subscribe(this.config.websocket.redisChannel, (err, count) => {
      if (err) {
        this.logger.log('Failed to subscribe: %s', err.message);
      } else {
        this.logger.log(`Subscribed to uws redis channel, total nodes: ${count}`);
      }
    });
  }

  publish(channel: string, event: string, message: any): void {
    this.redisPubClient.publish(
      this.config.websocket.redisChannel,
      JSON.stringify([
        channel,
        JSON.stringify([event, message]),
      ]),
    );
  }
}

declare module 'nanoexpress' {
  interface IWebSocket {
    sv: SessionVariable
  }
}