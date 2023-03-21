import { CacheModule, Module } from '@nestjs/common';
import { ExampleController } from './example.controller';
import { ExampleService } from './example.service';

@Module({
  imports: [CacheModule.register()],
  controllers: [ExampleController],
  providers: [ExampleService],
})
export class ExampleModule {}
