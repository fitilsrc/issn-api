import { CredentialType } from '@app/shared';
import { Body, Controller, Get, Inject, Post, Headers } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authService: ClientProxy,
    @Inject('PRESENCE_SERVICE') private readonly presenceService: ClientProxy,
  ) {}

  @Get('auth/introspect')
  async getIntrospect(
    @Headers() headers
  ) {
    const token = headers['authorization'].replace('Bearer ', '');
    return this.authService.send(
      {
        cmd: 'get-introspect',
      },
      {
        token,
      },
    )
  }

  @Get('auth/sessions')
  async getSessions(
    @Headers() headers
  ) {
    const token = headers['authorization'];

    return this.authService.send(
      {
        cmd: 'get-sessions',
      },
      {
        token,
      },
    )
  }

  @Post('auth/login')
  async getToken(
    @Body() { username, password }: CredentialType,
  ) {
    return this.authService.send(
      {
        cmd: 'get-token',
      },
      {
        username: username,
        password: password,
      },
    )
  }

  @Post('auth/logout')
  async logotSession(
    @Body() payload: { access_token: string, refresh_token: string },
  ) {
    return this.authService.send(
      {
        cmd: 'logout-session',
      },
      {
        access_token: payload.access_token,
        refresh_token: payload.refresh_token,
      },
    )
  }

  @Post('auth/refresh')
  async getRefresh(
    @Body() payload: { token: string },
  ) {
    return this.authService.send(
      {
        cmd: 'refresh-token',
      },
      {
        token: payload.token,
      },
    )
  }

  @Get('presence')
  async getPresence() {
    return this.presenceService.send(
      {
        cmd: 'get-presence',
      },
      {},
    )
  }
}
