import { Module } from "@nestjs/common";
import { PersonsResolver } from "./persons.resolver";
import { SharedModule } from "@app/shared";

@Module({
  imports: [
    SharedModule,
    SharedModule.registerRmq("AUTH_SERVICE", process.env.RABBITMQ_AUTH_QUEUE),
    SharedModule.registerRmq("PERSONS_SERVICE", process.env.RABBITMQ_PERSONS_QUEUE),
    SharedModule.registerRmq("FILES_SERVICE", process.env.RABBITMQ_FILES_QUEUE),
  ],
  providers: [PersonsResolver]
})
export class PersonsModule {}
