import { Field, HideField, ID, InputType } from '@nestjs/graphql';
import { IsDateString, IsInt, IsOptional, IsUUID } from 'class-validator';
import { UpdateCarePackageScheduleDto } from 'src/domain/Entities/CarePackageSchedule/Dto/UpdateCarePackageScheduleDto';

@InputType()
export abstract class UpdateCarePackageScheduleInput
  implements UpdateCarePackageScheduleDto
{
  @Field(() => ID)
  @IsUUID('all', { message: 'ID inválido' })
  id: string;

  @Field({ nullable: true })
  @IsDateString({}, { message: 'Data de entrega inválida' })
  @IsOptional()
  deliveryDate?: Date;

  @Field({ nullable: true })
  @IsInt({ message: 'A quantidade de pacotes deve ser um número inteiro' })
  @IsOptional()
  carePackageCount?: number;

  @HideField()
  updatedBy: string;
}
