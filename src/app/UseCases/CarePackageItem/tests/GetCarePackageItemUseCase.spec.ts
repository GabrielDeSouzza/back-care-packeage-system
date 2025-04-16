import { TestingModule, Test } from '@nestjs/testing';
import { CarePackageItemRepository } from 'src/domain/Repositories/CarePackageItemRepository';
import { GetCarePackageItemUseCase } from '../GetCarePackageItemUse';
import { CarePackageItemEntity } from 'src/domain/Entities/CarePackageItem/CarePackageItemEntity';
import { NotFoundException } from '@nestjs/common';

describe('GetCarePackageItemUseCase', () => {
  let getCarePackageItemUseCase: GetCarePackageItemUseCase;
  let carePackageItemRepositoryMock: jest.Mocked<CarePackageItemRepository>;

  beforeEach(async () => {
    carePackageItemRepositoryMock = {
      getCarePackageItem: jest.fn(),
      createCarePackageItem: jest.fn(),
      updateCarePackageItem: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetCarePackageItemUseCase,
        {
          provide: CarePackageItemRepository,
          useValue: carePackageItemRepositoryMock,
        },
      ],
    }).compile();

    getCarePackageItemUseCase = module.get<GetCarePackageItemUseCase>(
      GetCarePackageItemUseCase,
    );
  });

  it('should be defined', () => {
    expect(getCarePackageItemUseCase).toBeDefined();
  });
  it('should return a care package item by ID', async () => {
    const mockItem = { id: '1', name: 'item1' };
    carePackageItemRepositoryMock.getCarePackageItem.mockResolvedValue(
      mockItem as CarePackageItemEntity,
    );

    const result = await getCarePackageItemUseCase.execute({ id: '1' });

    expect(result).toEqual(mockItem);
    expect(
      carePackageItemRepositoryMock.getCarePackageItem,
    ).toHaveBeenCalledWith({
      id: '1',
    });
  });
  it('should return a care package item by Name', async () => {
    const mockItem = { id: '1', name: 'item1' };
    carePackageItemRepositoryMock.getCarePackageItem.mockResolvedValue(
      mockItem as CarePackageItemEntity,
    );

    const result = await getCarePackageItemUseCase.execute({ name: 'item1' });

    expect(result).toEqual(mockItem);
    expect(
      carePackageItemRepositoryMock.getCarePackageItem,
    ).toHaveBeenCalledWith({
      name: 'item1',
    });
  });
  it('should throw NotFoundException if item not found', async () => {
    carePackageItemRepositoryMock.getCarePackageItem.mockResolvedValue(
      undefined,
    );

    await expect(
      getCarePackageItemUseCase.execute({ id: '1' }),
    ).rejects.toThrow(new NotFoundException('Item não encontrado'));
  });
});
