import { TestingModule, Test } from '@nestjs/testing';
import { TypeCarePackageRepository } from 'src/domain/Repositories/TypeCarePackageRepository';
import {
  TypeCarePackageEntity,
  TypeCarePackageEntityProps,
} from 'src/domain/Entities/TypeCarePackage/TypeCarePackageEntity';
import { NotFoundException } from '@nestjs/common';
import { GetTypeCarePackageUseCase } from '../GetTypeCarePackageUse';

describe('GetTypeCarePackageUseCase', () => {
  let getTypeCarePackageUseCase: GetTypeCarePackageUseCase;
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
        GetTypeCarePackageUseCase,
        {
          provide: TypeCarePackageRepository,
          useValue: typeCarePackageRepositoryMock,
        },
      ],
    }).compile();

    getTypeCarePackageUseCase = module.get<GetTypeCarePackageUseCase>(
      GetTypeCarePackageUseCase,
    );
  });

  it('should be defined', () => {
    expect(getTypeCarePackageUseCase).toBeDefined();
  });
  it('should return a care package  by ID', async () => {
    const mock: TypeCarePackageEntityProps = {
      id: '1',
      name: 'typeCarePackage',
    } as TypeCarePackageEntityProps;
    typeCarePackageRepositoryMock.getTypeCarePackage.mockResolvedValue(
      mock as TypeCarePackageEntity,
    );

    const result = await getTypeCarePackageUseCase.execute({ id: '1' });

    expect(result).toEqual(mock);
    expect(
      typeCarePackageRepositoryMock.getTypeCarePackage,
    ).toHaveBeenCalledWith({
      id: '1',
    });
  });
  it('should return a care package  by Name', async () => {
    const mock: TypeCarePackageEntityProps = {
      id: '1',
      name: 'typeCarePackage',
    } as TypeCarePackageEntityProps;
    typeCarePackageRepositoryMock.getTypeCarePackage.mockResolvedValue(
      mock as TypeCarePackageEntity,
    );

    const result = await getTypeCarePackageUseCase.execute({
      name: 'typeCarePackage',
    });

    expect(result).toEqual(mock);
    expect(
      typeCarePackageRepositoryMock.getTypeCarePackage,
    ).toHaveBeenCalledWith({
      name: 'typeCarePackage',
    });
  });
  it('should throw NotFoundException if  not found', async () => {
    typeCarePackageRepositoryMock.getTypeCarePackage.mockResolvedValue(
      undefined,
    );

    await expect(
      getTypeCarePackageUseCase.execute({ id: '1' }),
    ).rejects.toThrow(new NotFoundException('Tipo não encontrado'));
  });
});
