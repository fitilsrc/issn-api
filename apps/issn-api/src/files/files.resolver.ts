import { Inject } from "@nestjs/common";
import { Args, Query, Resolver } from "@nestjs/graphql";
import { ClientProxy } from "@nestjs/microservices";
import { FileInput, FileNamesInput } from "./dto/file.input";
import { FileResponse } from "../persons/entities";
import { firstValueFrom, map } from "rxjs";
import { FileNamesPutPresignedResponse } from "./entitites/file-response.entity";

@Resolver(() => String)
export class FilesResolver {
  constructor(
    @Inject('FILES_SERVICE') private readonly filesService: ClientProxy,
  ) {}

  @Query(() => FileNamesPutPresignedResponse, { name: 'getPresignedPutUrl' })
  async getPresignedPutUrls(
    @Args('fileNamesInput') { filenames }: FileNamesInput
  ) {
     const res = await firstValueFrom(this.filesService.send(
      {
        cmd: 'get-presigned-put-urls',
      },
      {
        filenames
      },
    ))

    return { urls: JSON.stringify(res) };
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
