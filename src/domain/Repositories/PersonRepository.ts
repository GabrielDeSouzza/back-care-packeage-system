import { PersonEntity } from '../Entities/Person/PersonEntity';
import { UpdatePersonDto } from '../Entities/Person/Dto/UpdatePersonDto';
import { GetPersonDto } from '../Entities/Person/Dto/GetPersonDto';
import { CreatePersonDto } from '../Entities/Person/Dto/CreatePersonDto';
import {
  CountPersonDTO,
  WherePersonRequestDTO,
} from '../Entities/Person/Dto/WherePersonDto';

export abstract class PersonRepository {
  abstract countPersons(request: CountPersonDTO): Promise<number>;
  abstract createPerson(data: CreatePersonDto): Promise<PersonEntity>;
  abstract updatePerson(data: UpdatePersonDto): Promise<PersonEntity>;
  abstract getPerson(request: GetPersonDto): Promise<PersonEntity>;
  abstract getAllPersons(
    request?: WherePersonRequestDTO,
  ): Promise<PersonEntity[]>;
}
