import { ConflictException } from '@nestjs/common';
import { TestingModule, Test } from '@nestjs/testing';
import { CarePackageScheduleEntity } from 'src/domain/Entities/CarePackageSchedule/CarePackageScheduleEntity';
import { CreateCarePackageScheduleDto } from 'src/domain/Entities/CarePackageSchedule/Dto/CreateCarePackageScheduleDto';
import { CarePackageScheduleRepository } from 'src/domain/Repositories/CarePackageScheduleRepository';
import { CreateCarePackageScheduleUseCase } from '../CreateCarePackageScheduleUseCase';

describe('CreateCarePackageScheduleUseCase', () => {
  let createCarePackageScheduleUseCase: CreateCarePackageScheduleUseCase;
  let carePackageScheduleRepositoryMock: jest.Mocked<CarePackageScheduleRepository>;

  beforeEach(async () => {
    carePackageScheduleRepositoryMock = {
      getCarePackageSchedule: jest.fn(),
      createCarePackageSchedule: jest.fn(),
      updateCarePackageSchedule: jest.fn(),
      countCarePackageSchedules: jest.fn(),
      getAllCarePackageSchedules: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateCarePackageScheduleUseCase,
        {
          provide: CarePackageScheduleRepository,
          useValue: carePackageScheduleRepositoryMock,
        },
      ],
    }).compile();

    createCarePackageScheduleUseCase =
      module.get<CreateCarePackageScheduleUseCase>(
        CreateCarePackageScheduleUseCase,
      );
  });

  it('should be defined', () => {
    expect(createCarePackageScheduleUseCase).toBeDefined();
  });

  it('should throw an error if the name is already in use', async () => {
    const existingItem = {
      deliveryDate: new Date('2025-01-01'),
    } as CarePackageScheduleEntity;
    carePackageScheduleRepositoryMock.getCarePackageSchedule.mockResolvedValue(
      existingItem,
    );

    const itemDto: CreateCarePackageScheduleDto = {
      deliveryDate: new Date('2025-01-01'),
      carePackageCount: 10,
    };

    await expect(
      createCarePackageScheduleUseCase.execute(itemDto),
    ).rejects.toThrow(
      new ConflictException(
        `A Data ${itemDto.deliveryDate.toLocaleDateString('pt-br')} já esta em uso`,
      ),
    );
  });

  it('should successfully create a care package item', async () => {
    const itemDto: CreateCarePackageScheduleDto = {
      carePackageCount: 0,
      deliveryDate: new Date('2025-01-01'),
    };

    carePackageScheduleRepositoryMock.createCarePackageSchedule.mockResolvedValue(
      itemDto as CarePackageScheduleEntity,
    );

    const result = await createCarePackageScheduleUseCase.execute(itemDto);

    expect(result).toEqual({
      deliveryDate: new Date('2025-01-01'),
      carePackageCount: 0,
    });
  });
});
