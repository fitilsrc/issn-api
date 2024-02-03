import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import { CredentialType, SharedService } from '@app/shared';

@Controller()
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly sharedService: SharedService,

  ) {}

  @MessagePattern({ cmd: 'get-introspect' })
  async getintrospect(
    @Ctx() context: RmqContext,
    @Payload() payload: { token: string }
  ) {
    this.sharedService.acknowledgeMessage(context);

    return this.authService.getIntrospect(payload.token);
  }

  @MessagePattern({ cmd: 'get-token' })
  async getToken(
    @Ctx() context: RmqContext,
    @Payload() credential: CredentialType,
  ) {
    this.sharedService.acknowledgeMessage(context);

    return this.authService.getAccessToken(credential);
  }

  @MessagePattern({ cmd: 'refresh-token' })
  async refreshToken(
    @Ctx() context: RmqContext,
    @Payload() payload: { token: string },
  ) {
    this.sharedService.acknowledgeMessage(context);

    return this.authService.refreshAccessToken(payload.token);
  }

  @MessagePattern({ cmd: 'get-sessions' })
  async getSessions(
    @Ctx() context: RmqContext,
    @Payload() payload: { token: string },
  ) {
    this.sharedService.acknowledgeMessage(context);

    return this.authService.getActiveSessions(payload.token);
  }

  @MessagePattern({ cmd: 'logout-session' })
  async logoutSession(
    @Ctx() context: RmqContext,
    @Payload() payload: { access_token: string, refresh_token: string },
  ) {
    this.sharedService.acknowledgeMessage(context);

    return this.authService.logoutSession(payload.access_token, payload.refresh_token);
  }
}
