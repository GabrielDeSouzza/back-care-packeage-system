import { ConflictException } from '@nestjs/common';
import { TestingModule, Test } from '@nestjs/testing';
import { TypeCarePackageEntity } from 'src/domain/Entities/TypeCarePackage/TypeCarePackageEntity';
import { CreateTypeCarePackageDto } from 'src/domain/Entities/TypeCarePackage/Dto/CreateTypeCarePackageDto';
import { TypeCarePackageRepository } from 'src/domain/Repositories/TypeCarePackageRepository';
import { CreateTypeCarePackageUseCase } from '../CreateTypeCarePackageUseCase';
import { GetAllCarePackageItemUseCase } from '../../CarePackageItem/GetAllCarePackageItemUseCase';

describe('CreateTypeCarePackageUseCase', () => {
  let createTypeCarePackageUseCase: CreateTypeCarePackageUseCase;
  let typeCarePackageRepositoryMock: jest.Mocked<TypeCarePackageRepository>;
  let getAllcarePackageItemUseCaseMock: jest.Mocked<GetAllCarePackageItemUseCase>;

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
        CreateTypeCarePackageUseCase,
        {
          provide: TypeCarePackageRepository,
          useValue: typeCarePackageRepositoryMock,
        },
        {
          provide: GetAllCarePackageItemUseCase,
          useValue: getAllcarePackageItemUseCaseMock,
        },
      ],
    }).compile();

    createTypeCarePackageUseCase = module.get<CreateTypeCarePackageUseCase>(
      CreateTypeCarePackageUseCase,
    );
  });

  it('should be defined', () => {
    expect(createTypeCarePackageUseCase).toBeDefined();
  });

  it('should throw an error if the name is already in use', async () => {
    const existing = {
      name: 'Existing Name',
    } as TypeCarePackageEntity;
    typeCarePackageRepositoryMock.getTypeCarePackage.mockResolvedValue(
      existing,
    );

    const Dto: CreateTypeCarePackageDto = {
      name: 'Existing Name',
      itensName: ['Item 1', 'Item 2'],
    } as CreateTypeCarePackageDto;

    await expect(createTypeCarePackageUseCase.execute(Dto)).rejects.toThrow(
      new ConflictException(`A nome ${Dto.name} já esta em uso`),
    );
  });

  it('should successfully create a care package ', async () => {
    const Dto: CreateTypeCarePackageDto = {
      itensName: ['Item 1', 'Item 2'],
      name: 'New Care Package',
    } as CreateTypeCarePackageDto;

    typeCarePackageRepositoryMock.createTypeCarePackage.mockResolvedValue(
      Dto as TypeCarePackageEntity,
    );

    const result = await createTypeCarePackageUseCase.execute(Dto);

    expect(result).toEqual({
      deliveryDate: new Date('2025-01-01'),
      typeCarePackageCount: 0,
    });
  });

  it('should throw an error if the item names do not exist', async () => {
    const Dto: CreateTypeCarePackageDto = {
      itensName: ['Item 1', 'Item 2'],
      name: 'New Care Package',
    } as CreateTypeCarePackageDto;

    getAllcarePackageItemUseCaseMock.execute.mockResolvedValue([]);

    await expect(createTypeCarePackageUseCase.execute(Dto)).rejects.toThrow(
      new ConflictException(`Os itens ${Dto.itensName.join(', ')} não existem`),
    );
  });
  /*it('should verify if item names exist', async () => {
    const Dto: CreateTypeCarePackageDto = {
      itensName: ['Item 1', 'Item 2'],
      name: 'New Care Package',
    } as CreateTypeCarePackageDto;
    const mockItem: CarePackageItem = new CarePackageItemEntity({
      name: 'Item 1',
      createdAt: new Date(),
      updatedAt: new Date(),
      id: '1', 
      createdBy: '1',
      updatedBy: '1',
    }) as CarePackageItemEntity;
    getAllcarePackageItemUseCaseMock.execute.mockResolvedValue([
      mockItem
     mockItem,
    ]);

    await createTypeCarePackageUseCase.execute(Dto);

    expect(getAllcarePackageItemUseCaseMock.execute).toHaveBeenCalledWith({
      where: {
        name: {
          in: Dto.itensName,
        },
      },
      limit: 1000,
      offset: 0,
    });
  });*/
});
