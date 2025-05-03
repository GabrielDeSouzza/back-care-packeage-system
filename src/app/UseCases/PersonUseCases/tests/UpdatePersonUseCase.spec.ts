import { TestingModule, Test } from '@nestjs/testing';
import { PersonEntity } from 'src/domain/Entities/Person/PersonEntity';
import { UpdatePersonDto } from 'src/domain/Entities/Person/Dto/UpdatePersonDto';
import { PersonRepository } from 'src/domain/Repositories/PersonRepository';
import { UpdatePersonUseCase } from '../UpdatePersonUseCase';
import { ConflictException, NotFoundException } from '@nestjs/common';

describe('UpdatePersonUseCase', () => {
  let updatePersonUseCase: UpdatePersonUseCase;
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
        UpdatePersonUseCase,
        {
          provide: PersonRepository,
          useValue: personRepositoryMock,
        },
      ],
    }).compile();

    updatePersonUseCase = module.get<UpdatePersonUseCase>(UpdatePersonUseCase);
  });
  it('should be defined', () => {
    expect(updatePersonUseCase).toBeDefined();
  });
  it('should throw ConflictException if document already in use', async () => {
    const data: UpdatePersonDto = {
      newDocument: '123456789',
      oldDocument: '987654321',
      updatedBy: 'userId',
    };
    const existingItem = { id: '1', document: '987654321' };
    personRepositoryMock.getPerson.mockResolvedValue(
      existingItem as PersonEntity,
    );

    personRepositoryMock.getPerson
      .mockResolvedValueOnce(existingItem as PersonEntity)
      .mockResolvedValueOnce({
        id: '2',
        document: '123456789',
      } as PersonEntity);

    await expect(updatePersonUseCase.execute(data)).rejects.toThrow(
      new ConflictException(`O documento ${data.newDocument} já esta em uso`),
    );
  });
  it('should throw NotFoundException if document does not exist', async () => {
    personRepositoryMock.getPerson.mockResolvedValue(null);
    await expect(
      updatePersonUseCase.execute({
        newDocument: '123456789',
        oldDocument: '987654321',
        updatedBy: 'userId',
      } as UpdatePersonDto),
    ).rejects.toThrow(new NotFoundException('Pessoa não encontrada'));
  });
  it('should successfully update a care package item', async () => {
    const data: UpdatePersonDto = {
      newDocument: '123456789',
      oldDocument: '987654321',
      updatedBy: 'userId',
    };
    const existingItem = { id: '1', document: '987654321' };
    personRepositoryMock.getPerson
      .mockResolvedValueOnce(existingItem as PersonEntity)
      .mockResolvedValueOnce(null);
    personRepositoryMock.updatePerson.mockResolvedValue({
      id: '1',
      document: '123456789',
      updatedBy: 'userId',
    } as PersonEntity);
    const result = await updatePersonUseCase.execute(data);

    expect(result).toEqual({
      id: '1',
      document: '123456789',
      updatedBy: 'userId',
    } as PersonEntity);
  });
});
