import { Test, TestingModule } from '@nestjs/testing';
import { CreateCarePackageUseCase } from '../CreateCarePackageUseCase';
import { CarePackageRepository } from 'src/domain/Repositories/CarePackageRepository';
import { CarePackageScheduleRepository } from 'src/domain/Repositories/CarePackageScheduleRepository';
import { PersonRepository } from 'src/domain/Repositories/PersonRepository';
import { TypeCarePackageRepository } from 'src/domain/Repositories/TypeCarePackageRepository';
import { GetCarePackageScheduleUseCase } from '../../CarePackageScheduleUseCases/GetCarePackageScheduleUse';
import { GetPersonUseCase } from '../../PersonUseCases/GetPersonUse';
import { GetTypeCarePackageUseCase } from '../../TypeCarePackageUseCases /GetTypeCarePackageUse';
import { CreateCarePackageDto } from 'src/domain/Entities/CarePackage/Dto/CreateCarePackageDto';
import { PersonEntity } from 'src/domain/Entities/Person/PersonEntity';
import { TypeCarePackageEntity } from 'src/domain/Entities/TypeCarePackage/TypeCarePackageEntity';
import { CarePackageScheduleEntity } from 'src/domain/Entities/CarePackageSchedule/CarePackageScheduleEntity';
import { CarePackageEntity } from 'src/domain/Entities/CarePackage/CarePackageEntity';

describe('CreateCarePackageUseCase', () => {
  let createCarePackageUseCase: CreateCarePackageUseCase;

  const carePackageRepositoryMock = {
    getCarePackage: jest.fn(),
    createCarePackage: jest.fn(),
    updateCarePackage: jest.fn(),
    countCarePackages: jest.fn(),
    getAllCarePackages: jest.fn(),
  };

  const carePackageScheduleRepository = {
    getCarePackageSchedule: jest.fn(),
    createCarePackageSchedule: jest.fn(),
    updateCarePackageSchedule: jest.fn(),
    countCarePackageSchedules: jest.fn(),
    getAllCarePackageSchedules: jest.fn(),
  } as jest.Mocked<CarePackageScheduleRepository>;

  const personRepository = {
    getPerson: jest.fn(),
    createPerson: jest.fn(),
    updatePerson: jest.fn(),
    countPersons: jest.fn(),
    getAllPersons: jest.fn(),
  } as jest.Mocked<PersonRepository>;

  const typeCarePackageRepository = {
    getTypeCarePackage: jest.fn(),
    createTypeCarePackage: jest.fn(),
    updateTypeCarePackage: jest.fn(),
    countTypeCarePackages: jest.fn(),
    getAllTypeCarePackages: jest.fn(),
  } as jest.Mocked<TypeCarePackageRepository>;

  const carePackageDto: CreateCarePackageDto = {
    carePackageScheduleId: 'schedule-123',
    personId: 'person-123',
    typeCarePackageId: 'type-123',
    createdBy: 'user-123',
    updatedBy: 'user-123',
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateCarePackageUseCase,
        {
          provide: CarePackageRepository,
          useValue: carePackageRepositoryMock,
        },
        {
          provide: CarePackageScheduleRepository,
          useValue: carePackageScheduleRepository,
        },
        {
          provide: PersonRepository,
          useValue: personRepository,
        },
        {
          provide: TypeCarePackageRepository,
          useValue: typeCarePackageRepository,
        },
        GetCarePackageScheduleUseCase,
        GetPersonUseCase,
        GetTypeCarePackageUseCase,
      ],
    }).compile();

    createCarePackageUseCase = module.get(CreateCarePackageUseCase);
  });

  it('should be defined', () => {
    expect(createCarePackageUseCase).toBeDefined();
  });

  it('should create a care package successfully', async () => {
    personRepository.getPerson.mockResolvedValue({
      id: carePackageDto.personId,
    } as PersonEntity);
    carePackageScheduleRepository.getCarePackageSchedule.mockResolvedValue({
      id: carePackageDto.carePackageScheduleId,
    } as CarePackageScheduleEntity);
    typeCarePackageRepository.getTypeCarePackage.mockResolvedValue({
      id: carePackageDto.typeCarePackageId,
    } as TypeCarePackageEntity);
    carePackageRepositoryMock.createCarePackage.mockResolvedValue(
      carePackageDto as CarePackageEntity,
    );

    const result = await createCarePackageUseCase.execute(carePackageDto);

    expect(result).toEqual(carePackageDto);
    expect(carePackageRepositoryMock.createCarePackage).toHaveBeenCalledWith(
      expect.objectContaining({
        personId: carePackageDto.personId,
      }),
    );
  });
});
