import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/**
 * 어플리케이션 시작 부분
 * 가장 큰 AppModule을 넣어주고 시작한다
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();