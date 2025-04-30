import { ConflictException, Injectable } from '@nestjs/common';
import { PersonEntity } from 'src/domain/Entities/Person/PersonEntity';
import { CreatePersonDto } from 'src/domain/Entities/Person/Dto/CreatePersonDto';
import { PersonRepository } from 'src/domain/Repositories/PersonRepository';

@Injectable()
export class CreatePersonUseCase {
  constructor(private personRepository: PersonRepository) {}

  async execute(data: CreatePersonDto): Promise<PersonEntity> {
    await this.verifyDocumentInUse(data.document);

    return this.personRepository.createPerson(data);
  }
  private async verifyDocumentInUse(document: number): Promise<void> {
    const documentInUse = await this.personRepository.getPerson({
      document,
    });
    if (documentInUse)
      throw new ConflictException(`O documento ${document} já esta em uso`);
  }
}
