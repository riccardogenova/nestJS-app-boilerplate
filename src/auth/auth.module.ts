/** @format */

import { Module } from '@nestjs/common';

import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/models/users/users.module';
import appConfig from 'src/common/app.config';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: appConfig().appSecret,
      signOptions: { expiresIn: appConfig().appExpiration },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
