import { FileType } from '@app/shared';
import { UploadPresignedUrlResponseType } from '@app/shared/types';
import { Injectable, Logger } from '@nestjs/common';
import { MinioService } from 'nestjs-minio-client';

@Injectable()
export class FilesService {
  private readonly logger = new Logger(FilesService.name);

  constructor(
    private readonly minioService: MinioService,
  ) {}

  /**
   * Get presigned file url
   * @param filename
   * @returns Promise<FileType>
   */
  async getPresignedUrl(filename: string): Promise<Partial<FileType>> {
    this.logger.debug(`Attempting to get a link to a file ${filename}`)
    const response = await this.minioService.client.presignedUrl(
      'GET',
      'photo',
      filename
    )
    this.logger.debug(`MinIo response: ${JSON.stringify(response)}`);
    return {
      uri: response
    };
  }

  /**
   * Service: get urls for upload files from bucket
   * @param filenames
   * @returns Promise<UploadPresignedUrlResponseType[]>
   */
  async getPresignedPutUrl(filenames: string[]): Promise<UploadPresignedUrlResponseType[]> {
    const presignedPutUrls = [];
    for (let filename of filenames) {
      const url = await this.minioService.client.presignedPutObject(
        'photo',
        filename,
        20 * 60
      );
      presignedPutUrls.push({
        filename,
        url
      });
    }
    this.logger.debug(`MinIo presigned upload urls response: ${JSON.stringify(presignedPutUrls)}`);
    return presignedPutUrls;
  }

  /**
   * Remove objects from bucket
   * @param objectsList
   */
  async removeObjects(objectsList: string[]): Promise<void> {
    this.minioService.client.removeObjects(
      'photo',
      objectsList
    );
    this.logger.debug(`Objects have been deleted from bucket: ${JSON.stringify(objectsList)}`);
  }
}
