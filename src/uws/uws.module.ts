import { RedisModule } from '../redis/redis.module';
import { AuthModule } from '../auth/auth.module';
import { Global, Module } from '@nestjs/common';
import { UwsService } from './uws.service';

@Global()
@Module({
  imports: [AuthModule, RedisModule],
  providers: [UwsService],
  exports: [UwsService]
})
export class UwsModule {
}