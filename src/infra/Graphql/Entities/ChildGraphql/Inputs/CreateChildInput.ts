import { IsDateString, IsNotEmpty, IsString } from 'class-validator';
import { ChildEntityProps } from 'src/domain/Entities/Child/ChildEntity';

export abstract class CreateChildDto
  implements Omit<ChildEntityProps, 'id' | 'createdAt' | 'updatedAt'>
{
  @IsString()
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'O sobrenome é obrigatório' })
  lastName: string;

  @IsDateString({}, { message: 'Data de nascimento inválida' })
  dateBirh: Date;

  @IsString()
  @IsNotEmpty({ message: 'O responsável é obrigatório' })
  responsibleId: string;
  createdBy: string;
  updatedBy: string;
}
