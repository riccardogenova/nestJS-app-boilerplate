/** @format */

import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './models/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConfig } from './common/jwt.config';
import { ExampleController } from './models/example/example.controller';
import { ExampleModule } from './models/example/example.module';
import { ExampleService } from './models/example/example.service';
import { I18nModule } from 'nestjs-i18n';
import * as path from 'path';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ExampleModule,
    // MongooseModule.forRoot(process.env.APP_MONGO_PATH),
    CacheModule.register(),
    JwtModule.registerAsync(jwtConfig),
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: path.join(__dirname, '/i18n/'),
        watch: true,
      },
    }),
  ],
  controllers: [AppController, ExampleController],
  providers: [AppService, ExampleService],
})
export class AppModule {}
