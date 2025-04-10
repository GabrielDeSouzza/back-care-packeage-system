import { BadRequestException } from '@nestjs/common';
import { TestingModule, Test } from '@nestjs/testing';
import { EncryptionUtils } from 'src/app/Utils/EncryptionUtils';
import { CreateUserDto } from 'src/domain/Entities/User/Dto/CreateUserDto';
import { UserEntity } from 'src/domain/Entities/User/UserEntity';
import { UserRepository } from 'src/domain/Repositories/UserRepository';
import { CreateUserUseCase } from '../CreateUserUseCase';

describe('CreateUserUseCase', () => {
  let createUserUseCase: CreateUserUseCase;
  let userRepositoryMock: jest.Mocked<UserRepository>;

  beforeEach(async () => {
    userRepositoryMock = {
      getUser: jest.fn(),
      createUser: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateUserUseCase,
        { provide: UserRepository, useValue: userRepositoryMock },
        {
          provide: EncryptionUtils,
          useValue: {
            encryption: jest.fn(),
            decryption: jest.fn(),
          },
        },
      ],
    }).compile();

    createUserUseCase = module.get<CreateUserUseCase>(CreateUserUseCase);
  });

  it('should be defined', () => {
    expect(createUserUseCase).toBeDefined();
  });

  it('should throw an error if the user data is empty', async () => {
    await expect(
      createUserUseCase.execute({} as CreateUserDto),
    ).rejects.toThrow(
      new BadRequestException('É NESSARIO ENVIAR OS DADOS DO USUARIO'),
    );
  });

  it('should throw an error if the email is already in use', async () => {
    const existingUser = { email: 'test@example.com' } as UserEntity;
    userRepositoryMock.getUser.mockResolvedValue(existingUser);

    const userDto: CreateUserDto = {
      email: 'test@example.com',
      name: 'John Doe',
      password: 'password123',
    };

    await expect(createUserUseCase.execute(userDto)).rejects.toThrow(
      new BadRequestException(`O EMAIL ${userDto.email} já esta em uso`),
    );
  });

  it('should successfully create a user', async () => {
    const userDto: CreateUserDto = {
      email: 'newuser@example.com',
      name: 'John Doe',
      password: 'password123',
    };

    userRepositoryMock.getUser.mockResolvedValue(null); // Não há usuário com esse email

    // Mock para o método de criptografia
    const encryptedPassword = 'encryptedPassword';
    jest
      .spyOn(EncryptionUtils, 'encryption')
      .mockResolvedValue(encryptedPassword);

    const newUserEntity = new UserEntity({
      createdAt: new Date(),
      email: userDto.email.toLowerCase(),
      updatedAt: new Date(),
      name: userDto.name,
      password: encryptedPassword,
      id: crypto.randomUUID(),
    });

    userRepositoryMock.createUser.mockResolvedValue(newUserEntity);

    const result = await createUserUseCase.execute(userDto);

    expect(result).toEqual(
      expect.objectContaining({
        email: userDto.email.toLowerCase(),
        name: userDto.name,
        password: 'encryptedPassword',
        telephones: expect.arrayContaining([
          expect.objectContaining({
            area_code: 11,
            number: 987654321,
          }),
        ]),
      }),
    );
    expect(userRepositoryMock.createUser).toHaveBeenCalledWith(
      expect.objectContaining({
        email: userDto.email.toLowerCase(),
        name: userDto.name,
        password: 'encryptedPassword',
        telephones: expect.arrayContaining([
          expect.objectContaining({
            area_code: 11,
            number: 987654321,
          }),
        ]),
      }),
    );
  });
});
