import { FileType } from '@app/shared';
import { Injectable, Logger } from '@nestjs/common';
import { MinioService } from 'nestjs-minio-client';

@Injectable()
export class FilesService {
  private readonly logger = new Logger(FilesService.name);

  constructor(
    private readonly minioService: MinioService,
  ) {}

  getHello(): string {
    this.logger.debug("Hello")
    return 'Hello Files!';
  }

  async getFileUrl(filename: string): Promise<Partial<FileType>> {
    this.logger.debug(`Attempting to get a link to a file ${filename}`)
    const response = await this.minioService.client.presignedUrl(
      'GET',
      'photo',
      filename
    )
    this.logger.debug(`MinIo response: ${JSON.stringify(response)}`)
    return {
      uri: response
    };
  }
}
