import { TestingModule, Test } from '@nestjs/testing';
import { CarePackageItemEntity } from 'src/domain/Entities/CarePackageItem/CarePackageItemEntity';
import { UpdateCarePackageItemDto } from 'src/domain/Entities/CarePackageItem/Dto/UpdateCarePackageItemDto';
import { CarePackageItemRepository } from 'src/domain/Repositories/CarePackageItemRepository';
import { UpdateCarePackageItemUseCase } from '../UpdateCarePackageItemUseCase';
import { ConflictException, NotFoundException } from '@nestjs/common';

describe('UpdateCarePackageItemUseCase', () => {
  let updateCarePackageItemUseCase: UpdateCarePackageItemUseCase;
  let carePackageItemRepositoryMock: jest.Mocked<CarePackageItemRepository>;
  beforeEach(async () => {
    carePackageItemRepositoryMock = {
      getCarePackageItem: jest.fn(),
      createCarePackageItem: jest.fn(),
      updateCarePackageItem: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UpdateCarePackageItemUseCase,
        {
          provide: CarePackageItemRepository,
          useValue: carePackageItemRepositoryMock,
        },
      ],
    }).compile();

    updateCarePackageItemUseCase = module.get<UpdateCarePackageItemUseCase>(
      UpdateCarePackageItemUseCase,
    );
  });
  it('should be defined', () => {
    expect(updateCarePackageItemUseCase).toBeDefined();
  });
  it('should throw ConflictException if name already in use', async () => {
    const data: UpdateCarePackageItemDto = {
      id: '1',
      name: 'Existing Name',
      updatedBy: 'userId',
    };
    const existingItem = { id: '1', name: 'Old Name' };
    carePackageItemRepositoryMock.getCarePackageItem.mockResolvedValue(
      existingItem as CarePackageItemEntity,
    );

    carePackageItemRepositoryMock.getCarePackageItem
      .mockResolvedValueOnce(existingItem as CarePackageItemEntity)
      .mockResolvedValueOnce({
        id: '2',
        name: 'Existing Name',
      } as CarePackageItemEntity);

    await expect(updateCarePackageItemUseCase.execute(data)).rejects.toThrow(
      new ConflictException(`O nome ${data.name} já esta em uso`),
    );
  });
  it('should throw NotFoundException if item does not exist', async () => {
    carePackageItemRepositoryMock.getCarePackageItem.mockResolvedValue(null);
    await expect(
      updateCarePackageItemUseCase.execute({
        id: 'invalidId',
        name: 'New Name',
        updatedBy: 'userId',
      } as UpdateCarePackageItemDto),
    ).rejects.toThrow(new NotFoundException('Item não encontrado'));
  });
  it('should successfully update a care package item', async () => {
    const data: UpdateCarePackageItemDto = {
      id: '1',
      name: 'New Name',
      updatedBy: 'userId',
    };
    const existingItem = { id: '1', name: 'Old Name' };
    carePackageItemRepositoryMock.getCarePackageItem
      .mockResolvedValueOnce(existingItem as CarePackageItemEntity)
      .mockResolvedValueOnce(null);
    carePackageItemRepositoryMock.updateCarePackageItem.mockResolvedValue({
      id: '1',
      name: 'New Name',
      updatedBy: 'userId',
    } as CarePackageItemEntity);
    const result = await updateCarePackageItemUseCase.execute(data);

    expect(result).toEqual({
      id: '1',
      name: 'New Name',
      updatedBy: 'userId',
    } as CarePackageItemEntity);
  });
});
