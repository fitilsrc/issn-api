import { Inject } from "@nestjs/common";
import { Query, Resolver } from "@nestjs/graphql";
import { ClientProxy } from "@nestjs/microservices";

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
}
