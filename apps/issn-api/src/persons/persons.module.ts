import { Module } from "@nestjs/common";
import { PersonsResolver } from "./persons.resolver";
import { SharedModule } from "@app/shared";

@Module({
  imports: [
    SharedModule.registerRmq("PERSONS_SERVICE", process.env.RABBITMQ_PERSONS_QUEUE),
  ],
  providers: [PersonsResolver]
})
export class PersonsModule {}
