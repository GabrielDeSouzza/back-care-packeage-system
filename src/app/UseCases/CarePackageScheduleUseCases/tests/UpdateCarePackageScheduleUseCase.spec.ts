import { TestingModule, Test } from '@nestjs/testing';
import { CarePackageScheduleEntity } from 'src/domain/Entities/CarePackageSchedule/CarePackageScheduleEntity';
import { UpdateCarePackageScheduleDto } from 'src/domain/Entities/CarePackageSchedule/Dto/UpdateCarePackageScheduleDto';
import { CarePackageScheduleRepository } from 'src/domain/Repositories/CarePackageScheduleRepository';
import { UpdateCarePackageScheduleUseCase } from '../UpdateCarePackageScheduleUseCase';
import { ConflictException, NotFoundException } from '@nestjs/common';

describe('UpdateCarePackageScheduleUseCase', () => {
  let updateCarePackageScheduleUseCase: UpdateCarePackageScheduleUseCase;
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
        UpdateCarePackageScheduleUseCase,
        {
          provide: CarePackageScheduleRepository,
          useValue: carePackageScheduleRepositoryMock,
        },
      ],
    }).compile();

    updateCarePackageScheduleUseCase =
      module.get<UpdateCarePackageScheduleUseCase>(
        UpdateCarePackageScheduleUseCase,
      );
  });
  it('should be defined', () => {
    expect(updateCarePackageScheduleUseCase).toBeDefined();
  });
  it('should throw ConflictException if date already in use', async () => {
    const deliveryDate = new Date('2025-01-01');
    const data: UpdateCarePackageScheduleDto = {
      newDeliveryDate: deliveryDate,
      oldDeliveryDate: new Date('2025-01-01'),
      updatedBy: 'userId',
      carePackageCount: 10,
    };
    const existingItem = { id: '1', deliveryDate: new Date('2025-01-05') };
    carePackageScheduleRepositoryMock.getCarePackageSchedule.mockResolvedValue(
      existingItem as CarePackageScheduleEntity,
    );

    carePackageScheduleRepositoryMock.getCarePackageSchedule
      .mockResolvedValueOnce(existingItem as CarePackageScheduleEntity)
      .mockResolvedValueOnce({
        id: '2',
        deliveryDate,
      } as CarePackageScheduleEntity);

    await expect(
      updateCarePackageScheduleUseCase.execute(data),
    ).rejects.toThrow(
      new ConflictException(
        `O data ${data.newDeliveryDate.toLocaleDateString('pt-Br')} já esta em uso`,
      ),
    );
  });
  it('should throw NotFoundException if item does not exist', async () => {
    carePackageScheduleRepositoryMock.getCarePackageSchedule.mockResolvedValue(
      null,
    );
    await expect(
      updateCarePackageScheduleUseCase.execute({
        id: 'invalidId',
        carePackageCount: 10,
        deliveryDate: new Date(),
        updatedBy: 'userId',
      } as UpdateCarePackageScheduleDto),
    ).rejects.toThrow(new NotFoundException('Data não encontrada'));
  });
  it('should successfully update a care package item', async () => {
    const deliveryDate = new Date();
    const data: UpdateCarePackageScheduleDto = {
      carePackageCount: 10,
      newDeliveryDate: deliveryDate,
      oldDeliveryDate: new Date('2025-01-01'),
      updatedBy: 'userId',
    };
    const existingItem = { id: '1', deliveryDate: new Date('2025-01-01') };
    carePackageScheduleRepositoryMock.getCarePackageSchedule
      .mockResolvedValueOnce(existingItem as CarePackageScheduleEntity)
      .mockResolvedValueOnce(null);
    carePackageScheduleRepositoryMock.updateCarePackageSchedule.mockResolvedValue(
      {
        id: '1',
        deliveryDate,
        carePackageCount: 10,
        updatedBy: 'userId',
      } as unknown as CarePackageScheduleEntity,
    );
    const result = await updateCarePackageScheduleUseCase.execute(data);

    expect(result).toEqual({
      id: '1',
      deliveryDate,
      carePackageCount: 10,
      updatedBy: 'userId',
    } as unknown as CarePackageScheduleEntity);
  });
});
