import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateCarePackageDto } from 'src/domain/Entities/CarePackage/Dto/UpdateCaePackageDto';
import { CarePackageRepository } from 'src/domain/Repositories/CarePackageRepository';
import { GetTypeCarePackageUseCase } from '../TypeCarePackageUseCases /GetTypeCarePackageUse';
import { GetCarePackageScheduleUseCase } from '../CarePackageScheduleUseCases/GetCarePackageScheduleUse';
import { GetPersonUseCase } from '../PersonUseCases/GetPersonUse';

@Injectable()
export class UpdateCarePackageUseCase {
  constructor(
    private carePackageRepository: CarePackageRepository,
    private getPersonUseCase: GetPersonUseCase,
    private getTypeCarePackageUse: GetTypeCarePackageUseCase,
    private getCarePackageSchedulePackage: GetCarePackageScheduleUseCase,
  ) {}

  async execute(data: UpdateCarePackageDto) {
    const carePackageExist = await this.carePackageRepository.getCarePackage({
      numberControl: data.numberControl,
    });
    if (!carePackageExist)
      throw new NotFoundException('Numero de controle não encontrado');
    if (data.carePackageScheduleId)
      await this.getCarePackageSchedulePackage.execute({
        id: data.carePackageScheduleId,
      });
    if (data.personId)
      await this.getPersonUseCase.execute({ id: data.personId });
    if (data.typeCarePackageId)
      await this.getTypeCarePackageUse.execute({ id: data.typeCarePackageId });
    const updated = await this.carePackageRepository.updateCarePackage(data);
    return updated;
  }
}
