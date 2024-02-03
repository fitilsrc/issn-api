import { NestFactory } from '@nestjs/core';
import { PersonsModule } from './persons.module';

async function bootstrap() {
  const app = await NestFactory.create(PersonsModule);
  await app.listen(3000);
}
bootstrap();
