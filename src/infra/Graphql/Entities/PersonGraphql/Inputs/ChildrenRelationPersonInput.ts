import { Field, InputType } from '@nestjs/graphql';
import { IsDate, IsString } from 'class-validator';
import { CreateChildrenRelationPersonDto } from 'src/domain/Entities/Person/Dto/CreatePersonDto';
import { UpdateChildrenRelationPersonDto } from 'src/domain/Entities/Person/Dto/UpdatePersonDto';

@InputType()
export class CreateChildrenRelationPersonInput
  implements CreateChildrenRelationPersonDto
{
  @Field()
  @IsString()
  gender: string;
  @Field()
  @IsString()
  name: string;
  @Field()
  @IsString()
  lastName: string;
  @Field(() => Date)
  @IsDate({ message: 'Data de nascimento inválida' })
  birthdayDate: Date;
}

@InputType()
export class UpdateChildrenRelationPersonInput
  implements UpdateChildrenRelationPersonDto
{
  @Field()
  id: string;
  @Field({ nullable: true })
  gender?: string;
  @Field({ nullable: true })
  name?: string;
  @Field({ nullable: true })
  lastName?: string;
  @Field(() => Date, { nullable: true })
  birthdayDate?: Date;
}
