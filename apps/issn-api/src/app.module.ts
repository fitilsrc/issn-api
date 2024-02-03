import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { SharedModule } from '@app/shared';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PersonsModule } from './persons/persons.module';

@Module({
  imports: [
    PersonsModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: "./.env"
    }),
    SharedModule.registerRmq("AUTH_SERVICE", process.env.RABBITMQ_AUTH_QUEUE),
    SharedModule.registerRmq("PRESENCE_SERVICE", process.env.RABBITMQ_PRESENCE_QUEUE),
  ],
  controllers: [AppController],
})
export class AppModule {}
