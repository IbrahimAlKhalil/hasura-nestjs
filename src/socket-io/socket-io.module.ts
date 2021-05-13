import { SocketIoGateway } from './socket-io.gateway';
import { SocketIoService } from './socket-io.service';
import { AuthModule } from '../auth/auth.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [AuthModule],
  providers: [
    SocketIoGateway,
    SocketIoService,
  ],
  exports: [SocketIoService],
})
export class SocketIoModule {
}
