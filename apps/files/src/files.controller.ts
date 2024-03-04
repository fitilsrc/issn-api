import { Controller } from '@nestjs/common';
import { FilesService } from './files.service';
import { Ctx, MessagePattern, RmqContext } from '@nestjs/microservices';
import { SharedService } from '@app/shared';

@Controller()
export class FilesController {
  constructor(
    private readonly filesService: FilesService,
    private readonly sharedService: SharedService,
  ) {}

  @MessagePattern({ cmd: 'get-files' })
  async getFiles(
    @Ctx() context: RmqContext,
  ) {
    this.sharedService.acknowledgeMessage(context);
    return this.filesService.getHello();
  }
}
