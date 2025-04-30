import { ConflictException } from '@nestjs/common';
import { TestingModule, Test } from '@nestjs/testing';
import { PersonEntity } from 'src/domain/Entities/Person/PersonEntity';
import { CreatePersonDto } from 'src/domain/Entities/Person/Dto/CreatePersonDto';
import { PersonRepository } from 'src/domain/Repositories/PersonRepository';
import { CreatePersonUseCase } from '../CreatePersonUseCase';

describe('CreatePersonUseCase', () => {
  let createPersonUseCase: CreatePersonUseCase;
  let personRepositoryMock: jest.Mocked<PersonRepository>;

  beforeEach(async () => {
    personRepositoryMock = {
      getPerson: jest.fn(),
      createPerson: jest.fn(),
      updatePerson: jest.fn(),
      countPersons: jest.fn(),
      getAllPersons: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreatePersonUseCase,
        {
          provide: PersonRepository,
          useValue: personRepositoryMock,
        },
      ],
    }).compile();

    createPersonUseCase = module.get<CreatePersonUseCase>(CreatePersonUseCase);
  });

  it('should be defined', () => {
    expect(createPersonUseCase).toBeDefined();
  });

  it('should throw an error if the name is already in use', async () => {
    const existingItem = { document: 123456789 } as PersonEntity;
    personRepositoryMock.getPerson.mockResolvedValue(existingItem);

    const itemDto: CreatePersonDto = {
      name: 'testName',
      birthdayDate: new Date(),
      document: 123456789,
      gender: 'M',
      hasChild: true,
      lastName: 'lastName',
      children: [
        {
          birthdayDate: new Date(),
          name: 'childName',
          gender: 'M',
          lastName: 'childLastName',
        },
      ],
      createdBy: 'userId',
      updatedBy: 'userId',
    };

    await expect(createPersonUseCase.execute(itemDto)).rejects.toThrow(
      new ConflictException(`O documento ${itemDto.document} já esta em uso`),
    );
  });

  it('should successfully create a person', async () => {
    const itemDto: CreatePersonDto = {
      name: 'testName',
      birthdayDate: new Date(),
      document: 123456789,
      gender: 'M',
      hasChild: true,
      lastName: 'lastName',
      children: [
        {
          birthdayDate: new Date(),
          name: 'childName',
          gender: 'M',
          lastName: 'childLastName',
        },
      ],
      createdBy: 'userId',
      updatedBy: 'userId',
    };

    personRepositoryMock.createPerson.mockResolvedValue(
      itemDto as PersonEntity,
    );

    const result = await createPersonUseCase.execute(itemDto);

    expect(result).toEqual({
      name: 'testName',
      birthdayDate: new Date(),
      document: 123456789,
      gender: 'M',
      hasChild: true,
      lastName: 'lastName',
      children: [
        {
          birthdayDate: new Date(),
          name: 'childName',
          gender: 'M',
          lastName: 'childLastName',
        },
      ],
      createdBy: 'userId',
      updatedBy: 'userId',
    });
  });
});
