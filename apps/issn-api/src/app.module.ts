import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SharedModule } from '@app/shared';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PersonsModule } from './persons/persons.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    PersonsModule,
    AuthModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: "./.env"
    }),
    SharedModule.registerRmq("PRESENCE_SERVICE", process.env.RABBITMQ_PRESENCE_QUEUE),
  ],
  controllers: [],
})
export class AppModule {}
