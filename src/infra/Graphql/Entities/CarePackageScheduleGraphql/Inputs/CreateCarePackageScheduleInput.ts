import { Field, HideField, InputType } from '@nestjs/graphql';
import { IsDate, IsInt } from 'class-validator';
import { CreateCarePackageScheduleDto } from 'src/domain/Entities/CarePackageSchedule/Dto/CreateCarePackageScheduleDto';

@InputType()
export abstract class CreateCarePackageScheduleInput
  implements CreateCarePackageScheduleDto
{
  @Field()
  @IsDate({ message: 'Data de entrega inválida' })
  deliveryDate: Date;

  @Field()
  @IsInt({ message: 'A quantidade de pacotes deve ser um número inteiro' })
  carePackageCount: number;

  @HideField()
  createdBy: string;

  @HideField()
  updatedBy: string;
}
