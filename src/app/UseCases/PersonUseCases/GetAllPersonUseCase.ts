import { Injectable } from '@nestjs/common';
import { WherePersonRequestDTO } from 'src/domain/Entities/Person/Dto/WherePersonDto';
import { PersonEntity } from 'src/domain/Entities/Person/PersonEntity';
import { PersonRepository } from 'src/domain/Repositories/PersonRepository';

@Injectable()
export class GetAllPersonUseCase {
  constructor(private readonly personRepository: PersonRepository) {}
  async execute(request: WherePersonRequestDTO): Promise<PersonEntity[]> {
    return this.personRepository.getAllPersons(request);
  }
}
