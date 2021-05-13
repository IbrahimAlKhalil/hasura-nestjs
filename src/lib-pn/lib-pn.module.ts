import { LibPnService } from './lib-pn.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [LibPnService],
  exports: [LibPnService],
})
export class LibPnModule {}
