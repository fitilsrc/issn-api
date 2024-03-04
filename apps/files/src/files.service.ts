import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class FilesService {
  private readonly logger = new Logger(FilesService.name);

  getHello(): string {
    this.logger.debug("Hello")
    return 'Hello Files!';
  }
}
