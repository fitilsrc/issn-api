import { Inject, UseGuards } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { ClientProxy } from "@nestjs/microservices";
import { FileInput, FileNamesInput } from "./dto/file.input";
import { firstValueFrom, map } from "rxjs";
import { StatusResponse } from "@app/shared/entities/status-response.entity";
import { PresignedUrlResponse } from "./entities/file-response.entity";
import { JwtAuthGuard, RoleType, Roles } from "@app/shared";

@Resolver(() => String)
export class FilesResolver {
  constructor(
    @Inject('FILES_SERVICE') private readonly filesService: ClientProxy,
  ) {}

  @Mutation(() => [PresignedUrlResponse], { name: 'generateUploadUrls' })
  @UseGuards(JwtAuthGuard)
  @Roles(RoleType.ISSN_ADMIN, RoleType.ISSN_USER)
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

  @Mutation(() => PresignedUrlResponse, { name: 'generateFileUrl' })
  @UseGuards(JwtAuthGuard)
  @Roles(RoleType.ISSN_ADMIN, RoleType.ISSN_USER)
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

  @Query(() => [PresignedUrlResponse], { name: 'generateBundleOfPresignedUrls' })
  @UseGuards(JwtAuthGuard)
  @Roles(RoleType.ISSN_ADMIN, RoleType.ISSN_USER)
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

  @Mutation(() => PresignedUrlResponse, { name: 'generateDownloadUrl' })
  @UseGuards(JwtAuthGuard)
  @Roles(RoleType.ISSN_ADMIN, RoleType.ISSN_USER)
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
  @UseGuards(JwtAuthGuard)
  @Roles(RoleType.ISSN_ADMIN, RoleType.ISSN_USER)
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
