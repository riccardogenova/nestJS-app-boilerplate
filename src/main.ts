import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// INSERT MONGO URL = mongoose.connect(process.env.DATABASE_URL);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
