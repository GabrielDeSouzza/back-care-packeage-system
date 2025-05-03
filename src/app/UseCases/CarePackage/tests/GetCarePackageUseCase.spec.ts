import { TestingModule, Test } from '@nestjs/testing';
import { CarePackageRepository } from 'src/domain/Repositories/CarePackageRepository';
import { GetCarePackageUseCase } from '../GetCarePackageUseCase';
import { CarePackageEntity } from 'src/domain/Entities/CarePackage/CarePackageEntity';
import { NotFoundException } from '@nestjs/common';

describe('GetCarePackageUseCase', () => {
  let getCarePackageUseCase: GetCarePackageUseCase;
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
        GetCarePackageUseCase,
        {
          provide: CarePackageRepository,
          useValue: carePackageRepositoryMock,
        },
      ],
    }).compile();

    getCarePackageUseCase = module.get<GetCarePackageUseCase>(
      GetCarePackageUseCase,
    );
  });

  it('should be defined', () => {
    expect(getCarePackageUseCase).toBeDefined();
  });
  it('should return a care package  by ID', async () => {
    const mock = { id: '1' };
    carePackageRepositoryMock.getCarePackage.mockResolvedValue(
      mock as CarePackageEntity,
    );

    const result = await getCarePackageUseCase.execute({ id: '1' });

    expect(result).toEqual(mock);
    expect(carePackageRepositoryMock.getCarePackage).toHaveBeenCalledWith({
      id: '1',
    });
  });
  it('should return a care package  by Name', async () => {
    const mock = { id: '1', numberControl: 1 };
    carePackageRepositoryMock.getCarePackage.mockResolvedValue(
      mock as CarePackageEntity,
    );

    const result = await getCarePackageUseCase.execute({ numberControl: 1 });

    expect(result).toEqual(mock);
    expect(carePackageRepositoryMock.getCarePackage).toHaveBeenCalledWith({
      numberControl: 1,
    });
  });
  it('should throw NotFoundException if  not found', async () => {
    carePackageRepositoryMock.getCarePackage.mockResolvedValue(undefined);

    await expect(getCarePackageUseCase.execute({ id: '1' })).rejects.toThrow(
      new NotFoundException('Numero de controle não encontrado'),
    );
  });
});
