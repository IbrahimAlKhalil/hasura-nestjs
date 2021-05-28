import { RouterMethodFactory } from '@nestjs/core/helpers/router-method-factory';
import { AbstractHttpAdapter } from '@nestjs/core/adapters/http-adapter';
import * as bodyParser from '@nanoexpress/middleware-body-parser/cjs';
import { isNil, isObject } from '@nestjs/common/utils/shared.utils';
import { isAppInstance } from './util/is-app-instance';
import { RequestMethod } from '@nestjs/common';
import * as nanoexpress from 'nanoexpress';


export class Adapter extends AbstractHttpAdapter<nanoexpress.INanoexpressApp,
  nanoexpress.IHttpRequest,
  nanoexpress.IHttpResponse> {
  private readonly routerMethodFactory = new RouterMethodFactory();

  constructor(
    instanceOrOptions?: nanoexpress.INanoexpressApp | nanoexpress.IAppOptions,
  ) {
    super(
      isAppInstance(instanceOrOptions)
        ? instanceOrOptions
        : nanoexpress(instanceOrOptions),
    );
  }

  public reply(
    response: nanoexpress.IHttpResponse,
    body: never,
    statusCode?: number,
  ): void {
    if (statusCode) {
      response.status(statusCode);
    }

    if (isNil(body)) {
      response.send('');
    } else {
      isObject(body) ? response.json(body) : response.send(String(body));
    }
  }

  public status(response: nanoexpress.IHttpResponse, statusCode: number): void {
    response.status(statusCode);
  }

  public redirect(
    response: nanoexpress.IHttpResponse,
    statusCode: number,
    url: string,
  ): void {
    response.redirect(statusCode, url);
  }

  public setErrorHandler(handler: (...args: unknown[]) => unknown): void {
    this.use(handler);
  }

  public setNotFoundHandler(handler: (...args: unknown[]) => unknown): void {
    this.use(handler);
  }

  public setHeader(
    response: nanoexpress.IHttpResponse,
    name: string,
    value: string,
  ): void {
    response.header(name, value);
  }

  public listen(
    port: number,
    ...args: never[]
  ): Promise<nanoexpress.INanoexpressApp> {
    return this.httpServer.listen(port, ...args);
  }

  public close(): void {
    if (this.httpServer) {
      this.httpServer.close();
    }
  }

  public getRequestHostname(request: nanoexpress.IHttpRequest): string {
    return request.getIP();
  }

  public getRequestMethod(request: nanoexpress.IHttpRequest): string {
    return request.method;
  }

  public getRequestUrl(request: nanoexpress.IHttpRequest): string {
    return request.url;
  }

  public createMiddlewareFactory(
    requestMethod: RequestMethod,
  ): (path: string, callback: () => never) => never {
    return this.routerMethodFactory
      .get(this.instance, requestMethod)
      .bind(this.instance);
  }

  public registerParserMiddleware(): void {
    this.use(bodyParser());
  }

  public initHttpServer(): void {
    this.httpServer = this.instance;
  }

  public getType(): string {
    return 'uWebsockets.js';
  }

  /* ------------------- Not implemented -------------------- */
  public useStaticAssets(): void {
    //
  }

  public setViewEngine(): void {
    //
  }

  public render(): void {
    //
  }

  public enableCors(): void {
    //
  }
}
