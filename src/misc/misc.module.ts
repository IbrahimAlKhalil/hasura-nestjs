import { LibPnModule } from '../lib-pn/lib-pn.module';
import { MiscService } from './misc.service';
import { HttpModule, Module } from '@nestjs/common';

@Module({
  imports: [
    HttpModule,
    LibPnModule,
  ],
  providers: [MiscService],
  exports: [MiscService],
})
export class MiscModule {
}
