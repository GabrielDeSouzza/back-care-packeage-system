import { ConflictException } from '@nestjs/common';
import { TestingModule, Test } from '@nestjs/testing';
import { CarePackageItemEntity } from 'src/domain/Entities/CarePackageItem/CarePackageItemEntity';
import { CreateCarePackageItemDto } from 'src/domain/Entities/CarePackageItem/Dto/CreateCarePackageItemDto';
import { CarePackageItemRepository } from 'src/domain/Repositories/CarePackageItemRepository';
import { CreateCarePackageItemUseCase } from '../CreateCarePackageItemUseCase';

describe('CreateCarePackageItemUseCase', () => {
  let createCarePackageItemUseCase: CreateCarePackageItemUseCase;
  let carePackageItemRepositoryMock: jest.Mocked<CarePackageItemRepository>;

  beforeEach(async () => {
    carePackageItemRepositoryMock = {
      getCarePackageItem: jest.fn(),
      createCarePackageItem: jest.fn(),
      updateCarePackageItem: jest.fn(),
      countCarePackageItems: jest.fn(),
      getAllCarePackageItems: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateCarePackageItemUseCase,
        {
          provide: CarePackageItemRepository,
          useValue: carePackageItemRepositoryMock,
        },
      ],
    }).compile();

    createCarePackageItemUseCase = module.get<CreateCarePackageItemUseCase>(
      CreateCarePackageItemUseCase,
    );
  });

  it('should be defined', () => {
    expect(createCarePackageItemUseCase).toBeDefined();
  });

  it('should throw an error if the name is already in use', async () => {
    const existingItem = { name: 'item1' } as CarePackageItemEntity;
    carePackageItemRepositoryMock.getCarePackageItem.mockResolvedValue(
      existingItem,
    );

    const itemDto: CreateCarePackageItemDto = {
      name: 'item1',
      createdBy: 'userId',
      updatedBy: 'userId',
    };

    await expect(createCarePackageItemUseCase.execute(itemDto)).rejects.toThrow(
      new ConflictException(`O nome ${itemDto.name} já esta em uso`),
    );
  });

  it('should successfully create a care package item', async () => {
    const itemDto: CreateCarePackageItemDto = {
      name: 'item2',
      createdBy: 'userId',
      updatedBy: 'userId',
    };

    carePackageItemRepositoryMock.createCarePackageItem.mockResolvedValue(
      itemDto as CarePackageItemEntity,
    );

    const result = await createCarePackageItemUseCase.execute(itemDto);

    expect(result).toEqual({
      name: 'item2',
      createdBy: 'userId',
      updatedBy: 'userId',
    });
  });
});
