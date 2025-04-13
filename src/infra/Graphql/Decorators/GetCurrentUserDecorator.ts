import { createParamDecorator, type ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { UserEntity } from 'src/domain/Entities/User/UserEntity';

export const GetCurrentUser = createParamDecorator(
  (_, context: ExecutionContext): UserEntity => {
    const req = context.getArgByIndex<{ req: Request & { user: UserEntity } }>(
      2,
    ).req;
    const user = req.user;
    return user;
  },
);
