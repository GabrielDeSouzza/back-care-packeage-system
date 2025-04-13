import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { type Request } from 'express';
import { UserEntity } from 'src/domain/Entities/User/UserEntity';
import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';

@Injectable()
export class GraphQlAuthGuard extends AuthGuard('jwt') implements CanActivate {
  constructor(private jwtService: JwtService) {
    super();
  }
  async canActivate(executionContext: ExecutionContext): Promise<boolean> {
    const context = GqlExecutionContext.create(executionContext);
    const req = context.getArgByIndex<{ req: Request & { user: UserEntity } }>(
      2,
    ).req;
    const token = this.extractTokenFromHeader(req);
    if (!token) {
      throw new UnauthorizedException('Token não encontrado');
    }
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: process.env.JWT_KEY,
      });
      req.user = payload;
    } catch {
      throw new UnauthorizedException('Token Invalido');
    }

    return super.canActivate(new ExecutionContextHost([req])) as boolean;
  }
  private extractTokenFromHeader(request: Request): string | undefined {
    if (!request?.headers?.authorization) {
      throw new UnauthorizedException('Token não encontrado');
    }

    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
