import { Inject } from "@nestjs/common";
import { Args, Query, Resolver } from "@nestjs/graphql";
import { ClientProxy } from "@nestjs/microservices";
import { FileInput } from "./dto/file.input";
import { FileResponse } from "../persons/entities";

@Resolver(() => String)
export class FilesResolver {
  constructor(
    @Inject('FILES_SERVICE') private readonly filesService: ClientProxy,
  ) {}

  @Query(() => String, { name: 'getFiles' })
  getFiles() {
    return this.filesService.send(
      {
        cmd: 'get-files',
      },
      {},
    )
  }

  @Query(() => FileResponse, { name: 'getFileUrl' })
  getFileUrl(
    @Args('fileInput') { filename }: FileInput
  ) {
    return this.filesService.send(
      {
        cmd: 'get-file-url',
      },
      {
        filename
      },
    )
  }
}
