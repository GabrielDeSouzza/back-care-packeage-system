import { UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TestingModule, Test } from '@nestjs/testing';
import { EncryptionUtils } from 'src/app/Utils/EncryptionUtils';
import { SignInDto } from 'src/domain/Dtos/SignInData';
import { UserEntity } from 'src/domain/Entities/User/UserEntity';
import { UserRepository } from 'src/domain/Repositories/UserRepository';
import { GetUserUseCase } from '../../UserUseCase/GetUseUseCase';
import { SignInUseCase } from '../SignInUseCase';

describe('signInUseCase', () => {
  let signInUseCase: SignInUseCase;
  let getUserUseCaseMock: jest.Mocked<GetUserUseCase>;
  let jwtServiceMock: jest.Mocked<JwtService>;
  let userRepositoryMock: jest.Mocked<UserRepository>;
  beforeEach(async () => {
    userRepositoryMock = {
      getUser: jest.fn(),
      createUser: jest.fn(),
    };
    jwtServiceMock = {
      signAsync: jest.fn(),
      verify: jest.fn(),
    } as unknown as jest.Mocked<JwtService>;
    getUserUseCaseMock = {
      execute: jest.fn(),
    } as unknown as jest.Mocked<GetUserUseCase>;
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SignInUseCase,
        {
          provide: GetUserUseCase,
          useValue: getUserUseCaseMock, // Usamos o mock aqui
        },
        {
          provide: JwtService,
          useValue: jwtServiceMock,
        },
        { provide: UserRepository, useValue: { getUser: jest.fn() } },
        {
          provide: EncryptionUtils,
          useValue: {
            encryption: jest.fn(),
            decryption: jest.fn(),
          },
        },
      ],
    }).compile();

    signInUseCase = module.get<SignInUseCase>(SignInUseCase);
  });

  it('should be defined', () => {
    expect(signInUseCase).toBeDefined();
  });

  it('should throw UnauthorizedException if password is incorrect', async () => {
    const request: SignInDto = {
      email: 'test@test.com',
      password: 'incorrect password',
    };
    const user = new UserEntity({
      email: 'test@test.com',
      password: 'hashedPassword',
      id: 'user-id',
      name: 'Test User',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    jest.spyOn(EncryptionUtils, 'decryption').mockResolvedValue(false);
    getUserUseCaseMock.execute.mockResolvedValue(user);
    await expect(signInUseCase.signIn(request)).rejects.toThrow(
      new UnauthorizedException('Senha inválida'),
    );
  });

  it('should return token if password is correct', async () => {
    const request: SignInDto = {
      email: 'test@test.com',
      password: 'correectPassword',
    };
    const user = new UserEntity({
      email: 'test@test.com',
      password: 'hashedPassword',
      id: 'user-id',
      name: 'Test User',
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    jest.spyOn(EncryptionUtils, 'decryption').mockResolvedValue(true);
    getUserUseCaseMock.execute.mockResolvedValue(user);
    const token = 'some token';
    jwtServiceMock.signAsync.mockResolvedValue(token);

    const result = await signInUseCase.signIn(request);

    expect(result.token).toBe(token);
    expect(jwtServiceMock.signAsync).toHaveBeenCalledWith(
      {
        email: user.email,
        id: user.id,
        name: user.name,
      },
      { secret: process.env.JWT_KEY, expiresIn: process.env.JWT_EXPIRES_IN },
    );
  });
});
