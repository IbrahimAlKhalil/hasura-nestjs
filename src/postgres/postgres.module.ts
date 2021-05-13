import { Global, Module, OnModuleDestroy } from '@nestjs/common';
import { Config } from '../config/config';
import { Pool } from 'pg';

@Global()
@Module({
  providers: [
    {
      provide: Pool,
      useFactory(config: Config): Pool {
        return new Pool(config.postgres);
      },
      inject: [Config],
    },
  ],
  exports: [Pool],
})
export class PostgresModule implements OnModuleDestroy {
  constructor(private readonly pool: Pool) {
  }

  onModuleDestroy(): Promise<void> {
    return this.pool.end();
  }
}
