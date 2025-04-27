import { TestingModule, Test } from '@nestjs/testing';
import { TypeCarePackageEntity } from 'src/domain/Entities/TypeCarePackage/TypeCarePackageEntity';
import { UpdateTypeCarePackageDto } from 'src/domain/Entities/TypeCarePackage/Dto/UpdateTypeCarePackageDto';
import { TypeCarePackageRepository } from 'src/domain/Repositories/TypeCarePackageRepository';
import { ConflictException, NotFoundException } from '@nestjs/common';
import { UpdateTypeCarePackageUseCase } from '../UpdateTypeCarePackageUseCase';
import { GetAllCarePackageItemUseCase } from '../../CarePackageItem/GetAllCarePackageItemUseCase';

describe('UpdateTypeCarePackageUseCase', () => {
  let updateTypeCarePackageUseCase: UpdateTypeCarePackageUseCase;
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

    getAllcarePackageItemUseCaseMock = {
      execute: jest.fn(),
    } as unknown as jest.Mocked<GetAllCarePackageItemUseCase>;

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UpdateTypeCarePackageUseCase,
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

    updateTypeCarePackageUseCase = module.get<UpdateTypeCarePackageUseCase>(
      UpdateTypeCarePackageUseCase,
    );
  });
  it('should be defined', () => {
    expect(updateTypeCarePackageUseCase).toBeDefined();
  });
  it('should throw ConflictException if name already in use', async () => {
    const deliveryDate = new Date('2025-01-01');
    const data: UpdateTypeCarePackageDto = {
      newName: 'New Name',
      oldName: 'Old Name',
      itensName: ['Item 1', 'Item 2'],
      updatedBy: 'userId',
      id: '1',
      deletedItensName: ['Item 3'],
    };
    const existingItem = { id: '1', newName: 'New Name' };
    typeCarePackageRepositoryMock.getTypeCarePackage.mockResolvedValue(
      existingItem as unknown as TypeCarePackageEntity,
    );

    typeCarePackageRepositoryMock.getTypeCarePackage
      .mockResolvedValueOnce(existingItem as unknown as TypeCarePackageEntity)
      .mockResolvedValueOnce({
        id: '2',
        deliveryDate,
      } as unknown as TypeCarePackageEntity);

    await expect(updateTypeCarePackageUseCase.execute(data)).rejects.toThrow(
      new ConflictException(`O nome ${data.newName} já esta em uso`),
    );
  });
  it('should throw NotFoundException if item does not exist', async () => {
    typeCarePackageRepositoryMock.getTypeCarePackage.mockResolvedValue(null);
    await expect(
      updateTypeCarePackageUseCase.execute({
        id: 'invalidId',
        typeCarePackageCount: 10,
        deliveryDate: new Date(),
        updatedBy: 'userId',
        newName: 'New Name',
        oldName: 'Old Name',
      } as UpdateTypeCarePackageDto),
    ).rejects.toThrow(new NotFoundException('Tipo não encontrado'));
  });
  it('should successfully update a care package item', async () => {
    const data: UpdateTypeCarePackageDto = {
      id: '1',
      newName: 'Updated Name',
      oldName: 'Old Name',
      itensName: ['Item 1', 'Item 2'],
      deletedItensName: ['Item 3'],
      updatedBy: 'userId',
    };

    const existingItem = { id: '1', oldName: 'Old Name' };
    getAllcarePackageItemUseCaseMock.execute.mockResolvedValue([
      { name: 'Item 1' },
      { name: 'Item 2' },
    ] as any);
    typeCarePackageRepositoryMock.getTypeCarePackage
      .mockResolvedValueOnce(existingItem as unknown as TypeCarePackageEntity)
      .mockResolvedValueOnce(null);
    typeCarePackageRepositoryMock.updateTypeCarePackage.mockResolvedValue({
      id: '1',
      name: 'Updated Name',
      itensName: ['Item 1', 'Item 2'],
    } as unknown as TypeCarePackageEntity);
    const result = await updateTypeCarePackageUseCase.execute(data);

    expect(result).toEqual({
      id: '1',
      name: 'Updated Name',
      itensName: ['Item 1', 'Item 2'],
    } as unknown as TypeCarePackageEntity);
  });
  it('should verify if item names exist', async () => {
    const Dto: UpdateTypeCarePackageDto = {
      itensName: ['Item 1', 'Item 2'],
      newName: 'New Care Package',
      oldName: 'Old Care Package',
    } as UpdateTypeCarePackageDto;

    const mockItem = [
      {
        name: 'Item 1',
      },
      { name: 'Item 2' },
    ] as any;
    const existingItem = { id: '1', oldName: 'Old Name' };
    getAllcarePackageItemUseCaseMock.execute.mockResolvedValue(mockItem);

    typeCarePackageRepositoryMock.getTypeCarePackage
      .mockResolvedValueOnce(existingItem as unknown as TypeCarePackageEntity)
      .mockResolvedValueOnce(null);

    await updateTypeCarePackageUseCase.execute(Dto);

    expect(getAllcarePackageItemUseCaseMock.execute).toHaveBeenCalledWith({
      where: {
        name: {
          in: Dto.itensName,
        },
      },
      limit: 1000,
      offset: 0,
    });
  });
  it('should throw an error if the item names do not exist', async () => {
    const Dto: UpdateTypeCarePackageDto = {
      itensName: ['Item 1', 'Item 2'],
      newName: 'New Care Package',
      oldName: 'Old Care Package',
    } as UpdateTypeCarePackageDto;
    const existingItem = { id: '1', oldName: 'Old Name' };
    typeCarePackageRepositoryMock.getTypeCarePackage
      .mockResolvedValueOnce(existingItem as unknown as TypeCarePackageEntity)
      .mockResolvedValueOnce(null);
    getAllcarePackageItemUseCaseMock.execute.mockResolvedValue([]);

    await expect(updateTypeCarePackageUseCase.execute(Dto)).rejects.toThrow(
      new ConflictException(`Os itens ${Dto.itensName.join(', ')} não existem`),
    );
  });
});
