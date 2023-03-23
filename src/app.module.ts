import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ExampleController } from './models/example/example.controller';
import { ExampleModule } from './models/example/example.module';
import { ExampleService } from './models/example/example.service';
import { UsersModule } from './models/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConfig } from './common/jwt.config';

@Module({
  imports: [
    ExampleModule,
    AuthModule,
    CacheModule.register(),
    UsersModule,
    JwtModule.registerAsync(jwtConfig),
  ],
  controllers: [AppController, ExampleController],
  providers: [AppService, ExampleService],
})
export class AppModule {}
