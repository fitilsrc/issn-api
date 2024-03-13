import { FileType } from '@app/shared';
import { Injectable, Logger } from '@nestjs/common';
import { MinioService } from 'nestjs-minio-client';

@Injectable()
export class FilesService {
  private readonly logger = new Logger(FilesService.name);

  constructor(
    private readonly minioService: MinioService,
  ) {}

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

  async getPresignedPutUrl(filenames: string[]): Promise<Record<string, string>> {
    const presignedPutUrls: Record<string, string> = {};
    for (let filename of filenames) {
      presignedPutUrls[filename] = await this.minioService.client.presignedPutObject(
        'photo',
        filename,
        20 * 60
      )
    }
    this.logger.debug(`MinIo presigned upload urls response: ${JSON.stringify(presignedPutUrls)}`)
    console.log('[log]', typeof presignedPutUrls)
    return presignedPutUrls;
  }
}
