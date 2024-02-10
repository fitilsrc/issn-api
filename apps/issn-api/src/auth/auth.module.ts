import { Module } from "@nestjs/common";
import { SharedModule } from "@app/shared";
import { AuthResolver } from "./auth.resolver";

@Module({
  imports: [
    SharedModule.registerRmq("AUTH_SERVICE", process.env.RABBITMQ_AUTH_QUEUE),
  ],
  providers: [AuthResolver]
})
export class AuthModule {}
