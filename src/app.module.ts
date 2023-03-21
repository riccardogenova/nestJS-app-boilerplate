import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExampleService } from './example/example.service';
import { ExampleController } from './example/example.controller';
import { ExampleModule } from './example/example.module';

@Module({
  imports: [ExampleModule, CacheModule.register()],
  controllers: [AppController, ExampleController],
  providers: [AppService, ExampleService],
})
export class AppModule {}
