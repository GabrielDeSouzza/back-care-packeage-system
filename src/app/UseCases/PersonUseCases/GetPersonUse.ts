import { Injectable, NotFoundException } from '@nestjs/common';
import { GetPersonDto } from 'src/domain/Entities/Person/Dto/GetPersonDto';
import { PersonEntity } from 'src/domain/Entities/Person/PersonEntity';
import { PersonRepository } from 'src/domain/Repositories/PersonRepository';

@Injectable()
export class GetPersonUseCase {
  constructor(private personRepository: PersonRepository) {}

  async execute(request: GetPersonDto): Promise<PersonEntity> {
    const person = await this.personRepository.getPerson(request);
    this.ensureItemExists(person);
    return person;
  }

  private ensureItemExists(item: PersonEntity | null): void {
    if (!item) {
      throw new NotFoundException('Pessoa não encontrada');
    }
  }
}
