import { CacheModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< HEAD
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
=======
import { ExampleController } from './models/example/example.controller';
import { ExampleModule } from './models/example/example.module';
import { ExampleService } from './models/example/example.service';

@Module({
  imports: [ExampleModule, MongooseModule.forRoot(process.env.APP_MONGO_PATH), CacheModule.register()],
>>>>>>> b3b8e21 (chore(config): setup mongoose connection)
  controllers: [AppController, ExampleController],
  providers: [AppService, ExampleService, ,],
})
export class AppModule {}
