import { FileType } from '@app/shared';
import { PresignedUrlResponseType } from '@app/shared/types';
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
      url: response
    };
  }

  /**
   * Get bundle of presigned urls
   * @param filenames
   * @returns Promise<PresignedUrlResponseType[]>
   */
  async getBundleOfPresignedUrls(filenames: string[]): Promise<PresignedUrlResponseType[]> {
    this.logger.debug(`Attempting to get a link to a bundle of files ${JSON.stringify(filenames)}`)
    const presignedUrls = [];
    for (let filename of filenames) {
      const url = await this.minioService.client.presignedUrl(
        'GET',
        'photo',
        filename
      );
      presignedUrls.push({
        filename,
        url
      })
    }
    return presignedUrls
  }

  /**
   * Service: get urls for upload files from bucket
   * @param filenames
   * @returns Promise<UploadPresignedUrlResponseType[]>
   */
  async getPresignedPutUrl(filenames: string[]): Promise<PresignedUrlResponseType[]> {
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
  async deleteFileObjects(objectsList: string[]): Promise<void> {
    this.logger.debug(`Attempting to delete objects from bucket: ${JSON.stringify(objectsList)}`);
    this.minioService.client.removeObjects(
      'photo',
      objectsList
    );
  }

  /**
   * Service: get a download link to a file object
   * @param filename
   * @returns Promise<string>
   */
  async getPresignedGetUrl(filename: string): Promise<Partial<FileType>> {
    this.logger.debug(`Attempting to get a download link to a file ${filename}`)
    const response = await this.minioService.client.presignedGetObject(
      'photo',
      filename,
      60 * 60
    );

    return {
      url: response
    };
  }
}
