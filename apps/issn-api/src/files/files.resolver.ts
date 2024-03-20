import { Inject } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { ClientProxy } from "@nestjs/microservices";
import { FileInput, FileNamesInput } from "./dto/file.input";
import { firstValueFrom, map } from "rxjs";
import { StatusResponse } from "@app/shared/entities/status-response.entity";
import { FileResponse, PresignedUrlsResponse } from "./entities/file-response.entity";

@Resolver(() => String)
export class FilesResolver {
  constructor(
    @Inject('FILES_SERVICE') private readonly filesService: ClientProxy,
  ) {}

  @Mutation(() => [PresignedUrlsResponse], { name: 'generateUploadUrls' })
  async generateUploadUrls(
    @Args('fileNamesInput') { filenames }: FileNamesInput
  ) {
    return await firstValueFrom(this.filesService.send(
      {
        cmd: 'get-presigned-put-urls',
      },
      {
        filenames
      },
    ));
  }

  @Mutation(() => FileResponse, { name: 'generateFileUrl' })
  async generateFileUrl(
    @Args('fileInput') { filename }: FileInput
  ) {
    return await firstValueFrom(this.filesService.send(
      {
        cmd: 'get-file-url',
      },
      {
        filename
      },
    ));
  }

  @Mutation(() => [PresignedUrlsResponse], { name: 'generateBundleOfPresignedUrls' })
  async generateBundleOfPresignedUrls(
    @Args('fileNamesInput') { filenames }: FileNamesInput
  ) {
    return await firstValueFrom(this.filesService.send(
      {
        cmd: 'get-bundle-of-presigned-urls',
      },
      {
        filenames
      },
    ));
  }

  @Mutation(() => FileResponse, { name: 'generateDownloadUrl' })
  async generateFileDownloadUrl(
    @Args('fileInput') { filename }: FileInput
  ) {
    return await firstValueFrom(this.filesService.send(
      {
        cmd: 'get-file-download-url',
      },
      {
        filename
      },
    ));
  }

  @Mutation(() => StatusResponse, { name: 'deleteFileObjects' })
  async deleteFileObjects(
    @Args('fileNamesInput') { filenames, bucket }: FileNamesInput
  ) {
    return await firstValueFrom(this.filesService.send(
      {
        cmd: 'delete-file-objects',
      },
      {
        filenames
      },
    ))
  }
}
