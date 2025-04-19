import { TestingModule, Test } from '@nestjs/testing';
import { CarePackageScheduleRepository } from 'src/domain/Repositories/CarePackageScheduleRepository';
import {
  CarePackageScheduleEntity,
  CarePackageScheduleEntityProps,
} from 'src/domain/Entities/CarePackageSchedule/CarePackageScheduleEntity';
import { NotFoundException } from '@nestjs/common';
import { GetCarePackageScheduleUseCase } from '../GetCarePackageScheduleUse';

describe('GetCarePackageScheduleUseCase', () => {
  let getCarePackageScheduleUseCase: GetCarePackageScheduleUseCase;
  let carePackageScheduleRepositoryMock: jest.Mocked<CarePackageScheduleRepository>;

  beforeEach(async () => {
    carePackageScheduleRepositoryMock = {
      getCarePackageSchedule: jest.fn(),
      createCarePackageSchedule: jest.fn(),
      updateCarePackageSchedule: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetCarePackageScheduleUseCase,
        {
          provide: CarePackageScheduleRepository,
          useValue: carePackageScheduleRepositoryMock,
        },
      ],
    }).compile();

    getCarePackageScheduleUseCase = module.get<GetCarePackageScheduleUseCase>(
      GetCarePackageScheduleUseCase,
    );
  });

  it('should be defined', () => {
    expect(getCarePackageScheduleUseCase).toBeDefined();
  });
  it('should return a care package item by ID', async () => {
    const mockItem: CarePackageScheduleEntityProps = {
      id: '1',
      carePackageCount: 10,
      deliveryDate: new Date(),
    };
    carePackageScheduleRepositoryMock.getCarePackageSchedule.mockResolvedValue(
      mockItem as CarePackageScheduleEntity,
    );

    const result = await getCarePackageScheduleUseCase.execute({ id: '1' });

    expect(result).toEqual(mockItem);
    expect(
      carePackageScheduleRepositoryMock.getCarePackageSchedule,
    ).toHaveBeenCalledWith({
      id: '1',
    });
  });
  it('should return a care package item by Name', async () => {
    const deliveryDate = new Date();
    const mockItem: CarePackageScheduleEntityProps = {
      id: '1',
      carePackageCount: 10,
      deliveryDate,
    };
    carePackageScheduleRepositoryMock.getCarePackageSchedule.mockResolvedValue(
      mockItem as CarePackageScheduleEntity,
    );

    const result = await getCarePackageScheduleUseCase.execute({
      deliveryDate: deliveryDate,
    });

    expect(result).toEqual(mockItem);
    expect(
      carePackageScheduleRepositoryMock.getCarePackageSchedule,
    ).toHaveBeenCalledWith({
      deliveryDate: deliveryDate,
    });
  });
  it('should throw NotFoundException if item not found', async () => {
    carePackageScheduleRepositoryMock.getCarePackageSchedule.mockResolvedValue(
      undefined,
    );

    await expect(
      getCarePackageScheduleUseCase.execute({ id: '1' }),
    ).rejects.toThrow(new NotFoundException('Data não encontrada'));
  });
});
