import { TestingModule, Test } from '@nestjs/testing';
import { TypeCarePackageRepository } from 'src/domain/Repositories/TypeCarePackageRepository';
import { CountTypeCarePackageUseCase } from '../CountTypeCarePackageUseCase';

describe('CountTypeCarePackageUseCase', () => {
  let countTypeCarePackageUseCase: CountTypeCarePackageUseCase;
  let typeCarePackageRepositoryMock: jest.Mocked<TypeCarePackageRepository>;

  beforeEach(async () => {
    typeCarePackageRepositoryMock = {
      getTypeCarePackage: jest.fn(),
      createTypeCarePackage: jest.fn(),
      updateTypeCarePackage: jest.fn(),
      countTypeCarePackages: jest.fn(),
      getAllTypeCarePackages: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CountTypeCarePackageUseCase,
        {
          provide: TypeCarePackageRepository,
          useValue: typeCarePackageRepositoryMock,
        },
      ],
    }).compile();

    countTypeCarePackageUseCase = module.get<CountTypeCarePackageUseCase>(
      CountTypeCarePackageUseCase,
    );
  });

  it('should be defined', () => {
    expect(countTypeCarePackageUseCase).toBeDefined();
  });

  it('should count care package s', async () => {
    const mockCount = 5;
    typeCarePackageRepositoryMock.countTypeCarePackages.mockResolvedValue(
      mockCount,
    );

    const result = await countTypeCarePackageUseCase.execute({});

    expect(result).toEqual(mockCount);
    expect(
      typeCarePackageRepositoryMock.countTypeCarePackages,
    ).toHaveBeenCalledWith({});
  });
});
