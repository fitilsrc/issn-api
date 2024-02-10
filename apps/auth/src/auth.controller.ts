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

  /**
   * Returns the user's login tokens and their expiration time
   * @param context
   * @param credential
   * @returns
   */
  @MessagePattern({ cmd: 'get-tokens' })
  async getTokens(
    @Ctx() context: RmqContext,
    @Payload() credential: CredentialType,
  ) {
    this.sharedService.acknowledgeMessage(context);

    try {
      return await this.authService.getAccessToken(credential);
    } catch (error) {
      return { error }
    }
  }

  /**
   * Returns refreshed tokens from keycloak realm
   * @param context
   * @param { refresh_token: string }
   * @returns
   */
  @MessagePattern({ cmd: 'refresh-token' })
  async refreshToken(
    @Ctx() context: RmqContext,
    @Payload() payload: { refresh_token: string },
  ) {
    this.sharedService.acknowledgeMessage(context);
    try {
      return await this.authService.refreshAccessToken(payload.refresh_token);
    } catch (error) {
      return { error }
    }
  }

  /**
   * Returns all active session from keycloak realm
   * @param context
   * @param { access_token: string }
   * @returns
   */
  @MessagePattern({ cmd: 'get-sessions' })
  async getSessions(
    @Ctx() context: RmqContext,
    @Payload() payload: { access_token: string },
  ) {
    this.sharedService.acknowledgeMessage(context);
    try {
      return await this.authService.getActiveSessions(payload.access_token);
    } catch (error) {
      return { error }
    }
  }

  /**
   * Logged out user from Keycloak realm
   * @param context
   * @param { access_token: string, refresh_token: string }
   * @returns
   */
  @MessagePattern({ cmd: 'logout-session' })
  async logoutSession(
    @Ctx() context: RmqContext,
    @Payload() payload: { access_token: string, refresh_token: string },
  ) {
    this.sharedService.acknowledgeMessage(context);

    try {
      await this.authService.logoutSession(payload.access_token, payload.refresh_token);
    } catch (error) {
      return { error }
    }

    return { message: "Successfully logged out" }
  }
}
