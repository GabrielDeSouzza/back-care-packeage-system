import { Field, HideField, ID, InputType } from '@nestjs/graphql';
import { IsOptional, IsUUID } from 'class-validator';
import { UpdateCarePackageDto } from 'src/domain/Entities/CarePackage/Dto/UpdateCaePackageDto';

@InputType()
export abstract class UpdateCarePackageInput implements UpdateCarePackageDto {
  @Field(() => ID)
  @IsUUID('all', { message: 'O ID deve ser um UUID válido' })
  id: string;

  @Field(() => ID, { nullable: true })
  @IsUUID('all', { message: 'O typeCarePackageId deve ser um UUID válido' })
  @IsOptional()
  typeCarePackageId?: string;

  @Field(() => ID, { nullable: true })
  @IsUUID('all', { message: 'O personId deve ser um UUID válido' })
  @IsOptional()
  personId?: string;

  @Field(() => ID, { nullable: true })
  @IsUUID('all', { message: 'O carePackageScheduleId deve ser um UUID válido' })
  @IsOptional()
  carePackageScheduleId?: string;

  @HideField()
  updatedBy: string;
}
