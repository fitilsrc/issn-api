import { CanActivate, ExecutionContext, Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { GqlExecutionContext } from "@nestjs/graphql";
import { ClientProxy } from "@nestjs/microservices";
import { firstValueFrom } from "rxjs";
import { RoleType } from "../types";
import { ROLES_KEY } from "../decorators/roles.decorator";

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    @Inject('AUTH_SERVICE') private readonly authService: ClientProxy,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const authHeader: string = ctx.getContext().req.headers['authorization'];
    if (!authHeader) return false;

    // Remove `Bearer ` substring
    const jwt = authHeader.slice(7);
    try {
      const response = await firstValueFrom(this.authService.send(
        {
          cmd: 'get-introspect',
        },
        {
          token: jwt
        },
      ))

      const requiredRoles = this.reflector.getAllAndOverride<RoleType[]>(ROLES_KEY, [
        context.getHandler()
      ]);

      // console.log('[log]', requiredRoles, response.realm_access.roles)

      return response.active
    } catch (error) {
      throw new UnauthorizedException();
    }
    return false
  }
}
