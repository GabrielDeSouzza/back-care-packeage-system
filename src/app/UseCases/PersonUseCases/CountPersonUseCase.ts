import { Injectable } from '@nestjs/common';
import { CountPersonDTO } from 'src/domain/Entities/Person/Dto/WherePersonDto';
import { PersonRepository } from 'src/domain/Repositories/PersonRepository';

@Injectable()
export class CountPersonUseCase {
  constructor(private readonly personRepository: PersonRepository) {}
  async execute(request: CountPersonDTO): Promise<number> {
    return this.personRepository.countPersons(request);
  }
}
