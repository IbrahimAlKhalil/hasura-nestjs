import { UserActionController } from './user-action.controller';
import { SocketIoModule } from '../socket-io/socket-io.module';
import { UserEventController } from './user-event.controller';
import { BcryptModule } from '../bcrypt/bcrypt.module';
import { MinioModule } from '../minio/minio.module';
import { AuthModule } from '../auth/auth.module';
import { UserService } from './user.service';
import { UserGateway } from './user.gateway';
import { Module } from '@nestjs/common';

@Module({
  imports: [AuthModule, BcryptModule, MinioModule, SocketIoModule],
  controllers: [UserEventController, UserActionController],
  providers: [UserService, UserGateway],
  exports: [UserService],
})
export class UserModule {
}
