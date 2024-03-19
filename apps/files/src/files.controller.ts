import { Controller } from '@nestjs/common';
import { FilesService } from './files.service';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import { SharedService, StatusResponseType, StatusType } from '@app/shared';
import { PresignedUrlResponseType } from '@app/shared/types';

@Controller()
export class FilesController {
  constructor(
    private readonly filesService: FilesService,
    private readonly sharedService: SharedService,
  ) {}

  @MessagePattern({ cmd: 'get-file-url' })
  async getPresignedUrl(
    @Ctx() context: RmqContext,
    @Payload() payload: { filename: string }
  ) {
    this.sharedService.acknowledgeMessage(context);

    return this.filesService.getPresignedUrl(payload.filename);
  }

  @MessagePattern({ cmd: 'get-bundle-of-presigned-urls' })
  async getBundleOfPresignedUrls(
    @Ctx() context: RmqContext,
    @Payload() payload: { filenames: string[] }
  ): Promise<PresignedUrlResponseType[]> {
    this.sharedService.acknowledgeMessage(context);

    return this.filesService.getBundleOfPresignedUrls(payload.filenames);
  }

  /**
   * Get urls for upload files to s3 bucket
   * @param context
   * @param payload
   * @returns Promise<UploadPresignedUrlResponseType[]>
   */
  @MessagePattern({ cmd: 'get-presigned-put-urls' })
  async getUpdatePresignedUrl(
    @Ctx() context: RmqContext,
    @Payload() payload: { filenames: string[] }
  ): Promise<PresignedUrlResponseType[]> {
    this.sharedService.acknowledgeMessage(context);

    return this.filesService.getPresignedPutUrl(payload.filenames);
  }

  /**
   * Remove objects from bucket
   * @param context
   * @param payload
   * @returns return Promise<StatusResponseType>
   */
  @MessagePattern({ cmd: 'remove-objects' })
  async removeObjects(
    @Ctx() context: RmqContext,
    @Payload() payload: { filenames: string[] }
  ): Promise<StatusResponseType> {
    this.sharedService.acknowledgeMessage(context);
    let statusResponse: StatusResponseType = { status: StatusType.SUCCESS};

    try {
      const response = await this.filesService.removeObjects(payload.filenames);
    } catch (error) {
      let message = 'Unknown error';
      if (error instanceof Error) message = error.message;

      statusResponse.status = StatusType.ERROR;
      statusResponse.message = message;
    }

    return statusResponse;
  }

  @MessagePattern({ cmd: 'get-file-download-url' })
  async getPresignedGetUrl(
    @Ctx() context: RmqContext,
    @Payload() payload: { filename: string }
  ) {
    this.sharedService.acknowledgeMessage(context);

    return this.filesService.getPresignedGetUrl(payload.filename);
  }
}
