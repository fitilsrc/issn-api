import { Inject, Headers } from "@nestjs/common";
import { Args, Context, Mutation, Query, Resolver } from "@nestjs/graphql";
import { ClientProxy } from "@nestjs/microservices";
import { UserCredentialInput } from "./dto/user-credential.input";
import { UserTokensInput } from "./dto/user-tokens.input";
import { SignOutResponse } from "./entities/signout-response.entity";
import { UserRefreshTokenInput } from "./dto/user-refresh-token.input";
import { TokensResponse } from "./entities/tokens-response.entity";
import { SessionResponse } from "./entities/session-response.entity";

@Resolver()
export class AuthResolver {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authService: ClientProxy,
  ) {}

  /**
   *
   * @param headers
   * @returns [SessionResponse]
   */
  @Query(() => [SessionResponse], { name: 'getUsersSessions'})
  getUsersSessions(
    @Context() context
  ) {
    const access_token = context.req.headers['authorization'];

    return this.authService.send(
      {
        cmd: 'get-sessions',
      },
      {
        access_token,
      },
    )
  }

  /**
   * Authenticate user with credential and returns tokens or error
   * @param { username, password}: UserCredentialInput
   * @returns TokensResponse
   */
  @Mutation(() => TokensResponse, { name: "signInUser" })
  signInUser(
    @Args('userCredentialInput') { username, password}: UserCredentialInput
  ) {
    return this.authService.send(
      {
        cmd: 'get-tokens',
      }, {
        username,
        password
      }
    )
  }

  /**
   * Returns user tokens or error
   * @param { refresh_token }: UserRefreshTokenInput
   * @returns TokensResponse
   */
  @Mutation(() => TokensResponse, { name: "refreshUserTokens" })
  refreshUserTokens(
    @Args('userRefreshTokenInput') { refresh_token }: UserRefreshTokenInput
  ) {
    return this.authService.send(
      {
        cmd: 'refresh-token',
      },
      {
        refresh_token,
      },
    )
  }

  /**
   * Returns successfully message or error
   * @param { access_token, refresh_token }: UserTokensInput
   * @returns SignOutResponse
   */
  @Mutation(() => SignOutResponse, { name: "signOutUser" })
  signOutUser(
    @Args('userTokensInput') { access_token, refresh_token }: UserTokensInput
  ) {
    return this.authService.send(
      {
        cmd: 'logout-session',
      },
      {
        access_token,
        refresh_token,
      },
    )
  }
}
