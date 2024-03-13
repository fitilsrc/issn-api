import { Controller } from '@nestjs/common';
import { FilesService } from './files.service';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import { SharedService } from '@app/shared';

@Controller()
export class FilesController {
  constructor(
    private readonly filesService: FilesService,
    private readonly sharedService: SharedService,
  ) {}

  @MessagePattern({ cmd: 'get-file-url' })
  async getFileUrl(
    @Ctx() context: RmqContext,
    @Payload() payload: { filename: string }
  ) {
    this.sharedService.acknowledgeMessage(context);
    return this.filesService.getFileUrl(payload.filename);
  }

  @MessagePattern({ cmd: 'get-presigned-put-urls' })
  async getFiles(
    @Ctx() context: RmqContext,
    @Payload() payload: { filenames: string[] }
  ) {
    this.sharedService.acknowledgeMessage(context);

    return this.filesService.getPresignedPutUrl(payload.filenames);
  }
}
