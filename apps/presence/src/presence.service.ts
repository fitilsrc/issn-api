import { Injectable } from '@nestjs/common';

@Injectable()
export class PresenceService {
  getPresence() {
    return { presence: 'Hello Presence' };
  }
}
