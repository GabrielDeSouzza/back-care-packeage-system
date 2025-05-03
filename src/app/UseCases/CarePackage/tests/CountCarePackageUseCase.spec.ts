import { TestingModule, Test } from '@nestjs/testing';
import { CarePackageRepository } from 'src/domain/Repositories/CarePackageRepository';
import { CountCarePackageUseCase } from '../CountCarePackageUseCase';

describe('CountCarePackageUseCase', () => {
  let countCarePackageUseCase: CountCarePackageUseCase;
  let carePackageRepositoryMock: jest.Mocked<CarePackageRepository>;

  beforeEach(async () => {
    carePackageRepositoryMock = {
      getCarePackage: jest.fn(),
      createCarePackage: jest.fn(),
      updateCarePackage: jest.fn(),
      countCarePackages: jest.fn(),
      getAllCarePackages: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CountCarePackageUseCase,
        {
          provide: CarePackageRepository,
          useValue: carePackageRepositoryMock,
        },
      ],
    }).compile();

    countCarePackageUseCase = module.get<CountCarePackageUseCase>(
      CountCarePackageUseCase,
    );
  });

  it('should be defined', () => {
    expect(countCarePackageUseCase).toBeDefined();
  });

  it('should count care package', async () => {
    const mockCount = 5;
    carePackageRepositoryMock.countCarePackages.mockResolvedValue(mockCount);

    const result = await countCarePackageUseCase.execute({});

    expect(result).toEqual(mockCount);
    expect(carePackageRepositoryMock.countCarePackages).toHaveBeenCalledWith(
      {},
    );
  });
});
