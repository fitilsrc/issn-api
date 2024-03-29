import { SharedModule } from "@app/shared";
import { Module } from "@nestjs/common";
import { FilesResolver } from "./files.resolver";

@Module({
  imports: [
    SharedModule,
    SharedModule.registerRmq("FILES_SERVICE", process.env.RABBITMQ_FILES_QUEUE),
    SharedModule.registerRmq("AUTH_SERVICE", process.env.RABBITMQ_AUTH_QUEUE),
  ],
  providers: [FilesResolver]
})
export class FilesModule {}
