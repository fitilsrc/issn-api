import { Injectable } from '@nestjs/common';

@Injectable()
export class PersonsService {
  getHello(): string {
    return 'Hello World!';
  }
}
