import { ConflictException, Injectable } from '@nestjs/common';
import { CarePackageEntity } from 'src/domain/Entities/CarePackage/CarePackageEntity';
import { CreateCarePackageDto } from 'src/domain/Entities/CarePackage/Dto/CreateCarePackageDto';
import { CarePackageRepository } from 'src/domain/Repositories/CarePackageRepository';
import { GetPersonUseCase } from '../PersonUseCases/GetPersonUse';
import { GetTypeCarePackageUseCase } from '../TypeCarePackageUseCases /GetTypeCarePackageUse';
import { GetCarePackageScheduleUseCase } from '../CarePackageScheduleUseCases/GetCarePackageScheduleUse';

@Injectable()
export class CreateCarePackageUseCase {
  constructor(
    private carePackageRepository: CarePackageRepository,
    private getPersonUseCase: GetPersonUseCase,
    private getTypeCarePackageUse: GetTypeCarePackageUseCase,
    private getCarePackageSchedulePackage: GetCarePackageScheduleUseCase,
  ) {}

  async execute(data: CreateCarePackageDto): Promise<CarePackageEntity> {
    await this.getPersonUseCase.execute({ id: data.personId });
    await this.getTypeCarePackageUse.execute({ id: data.typeCarePackageId });
    await this.getCarePackageSchedulePackage.execute({
      id: data.carePackageScheduleId,
    });
    return this.carePackageRepository.createCarePackage(data);
  }
}
