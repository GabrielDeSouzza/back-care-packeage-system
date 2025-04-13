import { Field, HideField, ID, InputType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';
import { CreateCarePackageDto } from 'src/domain/Entities/CarePackage/Dto/CreateCarePackageDto';

@InputType()
export abstract class CreateCarePackageInput implements CreateCarePackageDto {
  @Field(() => ID)
  @IsUUID('all', { message: 'O typeCarePackageId deve ser um UUID válido' })
  typeCarePackageId: string;

  @Field(() => ID)
  @IsUUID('all', { message: 'O personId deve ser um UUID válido' })
  personId: string;

  @Field(() => ID)
  @IsUUID('all', { message: 'O carePackageScheduleId deve ser um UUID válido' })
  carePackageScheduleId: string;

  @HideField()
  createdBy: string;

  @HideField()
  updatedBy: string;
}
