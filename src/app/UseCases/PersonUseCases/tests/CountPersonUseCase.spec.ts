import { TestingModule, Test } from '@nestjs/testing';
import { PersonRepository } from 'src/domain/Repositories/PersonRepository';
import { CountPersonUseCase } from '../CountPersonUseCase';

describe('CountPersonUseCase', () => {
  let countPersonUseCase: CountPersonUseCase;
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
        CountPersonUseCase,
        {
          provide: PersonRepository,
          useValue: personRepositoryMock,
        },
      ],
    }).compile();

    countPersonUseCase = module.get<CountPersonUseCase>(CountPersonUseCase);
  });

  it('should be defined', () => {
    expect(countPersonUseCase).toBeDefined();
  });

  it('should count persons', async () => {
    const mockCount = 5;
    personRepositoryMock.countPersons.mockResolvedValue(mockCount);

    const result = await countPersonUseCase.execute({});

    expect(result).toEqual(mockCount);
    expect(personRepositoryMock.countPersons).toHaveBeenCalledWith({});
  });
});
