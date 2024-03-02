import { CredentialType, TokensType } from '@app/shared';
import { UserSessionType } from '@app/shared/types/UserSessionType';
import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Payload } from '@nestjs/microservices';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  private keycloakLoginUri: string;
  private keycloakClientId: string;
  private keycloakClientName: string;
  private keycloakClientSecret: string;
  private keycloakRealm: string;

  private readonly logger = new Logger(AuthService.name);

  constructor(
    private readonly config: ConfigService,
    private readonly httpService: HttpService,
  ) {
    this.keycloakLoginUri = config.get('KEYCLOAK_CONNECT_URL');
    this.keycloakClientId = config.get('KEYCLOAK_CONNECT_CLIENT_ID');
    this.keycloakClientName = config.get('KEYCLOAK_CONNECT_CLIENT_NAME');
    this.keycloakClientSecret = config.get('KEYCLOAK_CONNECT_CLIENT_SECRET');
    this.keycloakRealm = config.get('KEYCLOAK_CONNECT_REALM');
  }

  /**
   * Get keycloak introspect info
   * @param token
   * @returns Promise<any>
   */
  async getIntrospect(
    @Payload() access_token: string,
  ): Promise<any> {
    const params = {
      access_token,
      client_id: this.keycloakClientId,
      client_secret: this.keycloakClientSecret
    }

    const keycloakTokenUri = `${this.keycloakLoginUri}/realms/${this.keycloakRealm}/protocol/openid-connect/token/introspect`

    const headersRequest = {
      'Content-Type' : 'application/x-www-form-urlencoded',
    }

    const { data } = await firstValueFrom(
      this.httpService.post(
        keycloakTokenUri,
        params,
        { headers: headersRequest }
      ).pipe(
        catchError((error) => {
          throw `An error happened. Msg: ${JSON.stringify(
            error?.response?.data,
          )}`;
        }),
      )
    )

    return data
  }

  /**
   * Get all active sessions from keycloak
   * @param token
   * @returns
   */
  async getActiveSessions(
    @Payload() token: string,
  ): Promise<UserSessionType> {
    const keycloakTokenUri = `${this.keycloakLoginUri}/admin/realms/${this.keycloakRealm}/clients/${this.keycloakClientId}/user-sessions`

    const headersRequest = {
      'Content-Type' : 'application/json',
      'Authorization' : token
    }

    const { data } = await firstValueFrom(
      this.httpService.get(
        keycloakTokenUri,
        { headers: headersRequest }
      ).pipe(
        catchError((error) => {
          throw `An error happened. Msg: ${JSON.stringify(
            error?.response?.data,
          )}`;
        }),
      )
    )

    return data
  }

  /**
   * Get tokens from keycloak by user
   * @param username
   * @param password
   * @returns Promise<TokensType>
   */
  async getAccessToken(
    @Payload() payload: CredentialType
  ): Promise<TokensType> {
    const params = {
      grant_type: "password",
      client_id: this.keycloakClientName,
      client_secret: this.keycloakClientSecret,
      username: payload.username,
      password: payload.password
    }

    this.logger.debug(
      `keycloak id: ${JSON.stringify(this.keycloakClientName)}`,
    );
    this.logger.debug(
      `keycloak secret: ${JSON.stringify(this.keycloakClientSecret)}`,
    );

    const keycloakTokenUri = `${this.keycloakLoginUri}/realms/${this.keycloakRealm}/protocol/openid-connect/token`

    const headersRequest = {
      'Content-Type' : 'application/x-www-form-urlencoded',
    }

    const { data } = await firstValueFrom(
      this.httpService.post(
        keycloakTokenUri,
        params,
        { headers: headersRequest }
      ).pipe(
        catchError((error) => {
          throw `An error happened. Msg: ${JSON.stringify(
            error?.response?.data,
          )}`;
        }),
      )
    )

    return {
      access_token: data.access_token,
      expires_in: data.expires_in,
      refresh_expires_in: data.refresh_expires_in,
      refresh_token: data.refresh_token,
    }
  }

  /**
   * Refresh tokens
   * @param refresh_token
   * @returns Promise<TokensType>
   */
  async refreshAccessToken(
    @Payload() refresh_token: string,
  ): Promise<TokensType> {
    const params = {
        grant_type: 'refresh_token',
        client_id: this.keycloakClientName,
        client_secret: this.keycloakClientSecret,
        refresh_token: refresh_token,
    }

    const keycloakTokenUri = `${this.keycloakLoginUri}/realms/${this.keycloakRealm}/protocol/openid-connect/token`

    const headersRequest = {
      'Content-Type' : 'application/x-www-form-urlencoded',
    }

    const { data } = await firstValueFrom(
      this.httpService.post(
        keycloakTokenUri,
        params,
        { headers: headersRequest }
      ).pipe(
        catchError((error) => {
          throw `An error happened. Msg: ${JSON.stringify(
            error?.response?.data,
          )}`;
        }),
      )
    )

    return data
  }

  /**
   * Logout user
   * @param access_token
   * @param refresh_token
   * @returns Promise<void>
   */
  async logoutSession(
    @Payload() access_token: string,
    @Payload() refresh_token: string,
  ): Promise<void> {
    const params = {
      client_id: this.keycloakClientName,
      client_secret: this.keycloakClientSecret,
      refresh_token: refresh_token,
    }

    const keycloakTokenUri = `${this.keycloakLoginUri}/realms/${this.keycloakRealm}/protocol/openid-connect/logout`

    const headersRequest = {
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Authorization' : access_token
    }

    const { data } = await firstValueFrom(
      this.httpService.post(
        keycloakTokenUri,
        params,
        { headers: headersRequest }
      ).pipe(
        catchError((error) => {
          throw `An error happened. Msg: ${JSON.stringify(
            error?.response?.data,
          )}`;
        }),
      )
    )

    return data
  }
}
