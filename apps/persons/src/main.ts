import { NestFactory } from '@nestjs/core';
import { PersonsModule } from './persons.module';
import { ConfigService } from '@nestjs/config';
import { SharedService } from '@app/shared';

async function bootstrap() {
  const app = await NestFactory.create(PersonsModule);
  const configService = app.get<ConfigService>(ConfigService);
  const sharedService = app.get<SharedService>(SharedService);

  const queue = configService.get('RABBITMQ_PERSONS_QUEUE');

  app.connectMicroservice(sharedService.getRmqOptions(queue));
  app.startAllMicroservices();
}
bootstrap();
