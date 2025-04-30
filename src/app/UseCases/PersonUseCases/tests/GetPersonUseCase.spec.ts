import { TestingModule, Test } from '@nestjs/testing';
import { PersonRepository } from 'src/domain/Repositories/PersonRepository';
import { GetPersonUseCase } from '../GetPersonUse';
import { PersonEntity } from 'src/domain/Entities/Person/PersonEntity';
import { NotFoundException } from '@nestjs/common';

describe('GetPersonUseCase', () => {
  let getPersonUseCase: GetPersonUseCase;
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
        GetPersonUseCase,
        {
          provide: PersonRepository,
          useValue: personRepositoryMock,
        },
      ],
    }).compile();

    getPersonUseCase = module.get<GetPersonUseCase>(GetPersonUseCase);
  });

  it('should be defined', () => {
    expect(getPersonUseCase).toBeDefined();
  });
  it('should return a person by ID', async () => {
    const mockItem = { id: '1', document: 123456789 };
    personRepositoryMock.getPerson.mockResolvedValue(mockItem as PersonEntity);

    const result = await getPersonUseCase.execute({ id: '1' });

    expect(result).toEqual(mockItem);
    expect(personRepositoryMock.getPerson).toHaveBeenCalledWith({
      id: '1',
    });
  });
  it('should return a person by document', async () => {
    const mockItem = { id: '1', document: 123456789 };
    personRepositoryMock.getPerson.mockResolvedValue(mockItem as PersonEntity);

    const result = await getPersonUseCase.execute({ document: 123456789 });

    expect(result).toEqual(mockItem);
    expect(personRepositoryMock.getPerson).toHaveBeenCalledWith({
      document: 123456789,
    });
  });
  it('should throw NotFoundException if item not found', async () => {
    personRepositoryMock.getPerson.mockResolvedValue(undefined);

    await expect(getPersonUseCase.execute({ id: '1' })).rejects.toThrow(
      new NotFoundException('Pessoa não encontrada'),
    );
  });
});
