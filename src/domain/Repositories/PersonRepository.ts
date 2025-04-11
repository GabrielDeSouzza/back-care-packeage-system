import { PersonEntity } from '../Entities/Person/PersonEntity';
import { UpdatePersonDto } from '../Entities/Person/Dto/UpdatePersonDto';
import { GetPersonDto } from '../Entities/Person/Dto/GetPersonDto';
import { CreatePersonDto } from '../Entities/Person/Dto/CreatePersonDto';

export abstract class PersonRepository {
  abstract createPerson(data: CreatePersonDto): Promise<PersonEntity>;

  abstract updatePerson(data: UpdatePersonDto): Promise<PersonEntity>;
  abstract getPerson(request: GetPersonDto): Promise<PersonEntity>;
}
