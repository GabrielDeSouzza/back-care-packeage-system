import { TestingModule, Test } from '@nestjs/testing';
import { CarePackageItemRepository } from 'src/domain/Repositories/CarePackageItemRepository';
import { CountCarePackageItemUseCase } from '../CountCarePackageItemUseCase';

describe('CountCarePackageItemUseCase', () => {
  let countCarePackageItemUseCase: CountCarePackageItemUseCase;
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
        CountCarePackageItemUseCase,
        {
          provide: CarePackageItemRepository,
          useValue: carePackageItemRepositoryMock,
        },
      ],
    }).compile();

    countCarePackageItemUseCase = module.get<CountCarePackageItemUseCase>(
      CountCarePackageItemUseCase,
    );
  });

  it('should be defined', () => {
    expect(countCarePackageItemUseCase).toBeDefined();
  });

  it('should count care package items', async () => {
    const mockCount = 5;
    carePackageItemRepositoryMock.countCarePackageItems.mockResolvedValue(
      mockCount,
    );

    const result = await countCarePackageItemUseCase.execute({});

    expect(result).toEqual(mockCount);
    expect(
      carePackageItemRepositoryMock.countCarePackageItems,
    ).toHaveBeenCalledWith({});
  });
});
