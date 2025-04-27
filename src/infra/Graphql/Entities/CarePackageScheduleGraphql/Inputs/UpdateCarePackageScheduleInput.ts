import { Field, HideField, ID, InputType } from '@nestjs/graphql';
import { IsDate, IsInt, IsOptional, IsUUID } from 'class-validator';
import { UpdateCarePackageScheduleDto } from 'src/domain/Entities/CarePackageSchedule/Dto/UpdateCarePackageScheduleDto';

@InputType()
export abstract class UpdateCarePackageScheduleInput
  implements UpdateCarePackageScheduleDto
{
  @Field({ nullable: true })
  @IsDate({ message: 'Data de entrega inválida' })
  @IsOptional()
  oldDeliveryDate?: Date;

  @Field({ nullable: true })
  @IsDate({ message: 'Data de entrega inválida' })
  @IsOptional()
  newDeliveryDate?: Date;

  @Field({ nullable: true })
  @IsInt({ message: 'A quantidade de pacotes deve ser um número inteiro' })
  @IsOptional()
  carePackageCount?: number;

  @HideField()
  updatedBy: string;
}
