import { TestingModule, Test } from '@nestjs/testing';
import { CarePackageEntity } from 'src/domain/Entities/CarePackage/CarePackageEntity';
import { CarePackageRepository } from 'src/domain/Repositories/CarePackageRepository';
import { UpdateCarePackageUseCase } from '../UpdateCarePackageUseCase';
import { NotFoundException } from '@nestjs/common';
import { UpdateCarePackageDto } from 'src/domain/Entities/CarePackage/Dto/UpdateCaePackageDto';
import { CarePackageScheduleRepository } from 'src/domain/Repositories/CarePackageScheduleRepository';
import { PersonRepository } from 'src/domain/Repositories/PersonRepository';
import { TypeCarePackageRepository } from 'src/domain/Repositories/TypeCarePackageRepository';
import { GetCarePackageScheduleUseCase } from '../../CarePackageScheduleUseCases/GetCarePackageScheduleUse';
import { GetPersonUseCase } from '../../PersonUseCases/GetPersonUse';
import { GetTypeCarePackageUseCase } from '../../TypeCarePackageUseCases /GetTypeCarePackageUse';
import { CarePackageScheduleEntity } from 'src/domain/Entities/CarePackageSchedule/CarePackageScheduleEntity';
import { PersonEntity } from 'src/domain/Entities/Person/PersonEntity';
import { TypeCarePackageEntity } from 'src/domain/Entities/TypeCarePackage/TypeCarePackageEntity';

describe('UpdateCarePackageUseCase', () => {
  let updateCarePackageUseCase: UpdateCarePackageUseCase;
  const carePackageRepository = {
    getCarePackage: jest.fn(),
    createCarePackage: jest.fn(),
    updateCarePackage: jest.fn(),
    countCarePackages: jest.fn(),
    getAllCarePackages: jest.fn(),
  } as jest.Mocked<CarePackageRepository>;

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

  const carePackageUpdateDto: UpdateCarePackageDto = {
    numberControl: 1,
    carePackageScheduleId: 'carePackageSchedule',
    personId: 'person',
    typeCarePackageId: 'typeCarePackage',
    updatedBy: 'userId',
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UpdateCarePackageUseCase,
        {
          provide: CarePackageRepository,
          useValue: carePackageRepository,
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

    updateCarePackageUseCase = module.get<UpdateCarePackageUseCase>(
      UpdateCarePackageUseCase,
    );
  });
  it('should be defined', () => {
    expect(updateCarePackageUseCase).toBeDefined();
  });

  it('should throw NotFoundException if  does not exist', async () => {
    carePackageRepository.getCarePackage.mockResolvedValue(null);
    await expect(
      updateCarePackageUseCase.execute(carePackageUpdateDto),
    ).rejects.toThrow(
      new NotFoundException('Numero de controle não encontrado'),
    );
  });
  it('should successfully update a care package ', async () => {
    const existing = { id: '1', numberControl: 1 };
    carePackageRepository.getCarePackage.mockResolvedValue(
      existing as CarePackageEntity,
    );
    carePackageRepository.updateCarePackage.mockResolvedValue({
      id: '1',
      numberControl: 1,
      updatedBy: 'userId',
    } as CarePackageEntity);

    personRepository.getPerson.mockResolvedValue({
      id: carePackageUpdateDto.personId,
    } as PersonEntity);
    carePackageScheduleRepository.getCarePackageSchedule.mockResolvedValue({
      id: carePackageUpdateDto.carePackageScheduleId,
    } as CarePackageScheduleEntity);
    typeCarePackageRepository.getTypeCarePackage.mockResolvedValue({
      id: carePackageUpdateDto.typeCarePackageId,
    } as TypeCarePackageEntity);
    const result = await updateCarePackageUseCase.execute(carePackageUpdateDto);

    expect(result).toEqual({
      id: '1',
      numberControl: 1,
      updatedBy: 'userId',
    } as CarePackageEntity);
  });
});
