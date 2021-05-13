import { HasuraService } from './hasura.service';
import { Global, Module } from '@nestjs/common';

@Global()
@Module({
  providers: [HasuraService],
  exports: [HasuraService],
})
export class HasuraModule {
}
