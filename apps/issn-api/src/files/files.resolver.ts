import { Inject } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { ClientProxy } from "@nestjs/microservices";
import { FileInput, FileNamesInput } from "./dto/file.input";
import { FileResponse } from "../persons/entities";
import { firstValueFrom, map } from "rxjs";
import { StatusResponse } from "@app/shared/entities/status-response.entity";
import { UploadPresignedUrlsResponse } from "./entitites/file-response.entity";

@Resolver(() => String)
export class FilesResolver {
  constructor(
    @Inject('FILES_SERVICE') private readonly filesService: ClientProxy,
  ) {}

  @Query(() => [UploadPresignedUrlsResponse], { name: 'getPresignedPutUrl' })
  async getPresignedPutUrls(
    @Args('fileNamesInput') { filenames }: FileNamesInput
  ) {
    return await firstValueFrom(this.filesService.send(
      {
        cmd: 'get-presigned-put-urls',
      },
      {
        filenames
      },
    ))
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

  @Mutation(() => StatusResponse, { name: 'removeObjects' })
  async removeObjects(
    @Args('fileNamesInput') { filenames }: FileNamesInput
  ) {
    return await firstValueFrom(this.filesService.send(
      {
        cmd: 'remove-objects',
      },
      {
        filenames
      },
    ))
  }
}
