import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UpdatePersonDto } from 'src/domain/Entities/Person/Dto/UpdatePersonDto';
import { PersonRepository } from 'src/domain/Repositories/PersonRepository';

@Injectable()
export class UpdatePersonUseCase {
  constructor(private personRepository: PersonRepository) {}

  async execute(data: UpdatePersonDto) {
    const personExist = await this.personRepository.getPerson({
      document: data.oldDocument,
    });
    if (!personExist) throw new NotFoundException('Pessoa não encontrada');

    if (data.newDocument && personExist.document !== data.newDocument) {
      await this.isDocumentInUse(data.newDocument);
    }
    const updatedItem = await this.personRepository.updatePerson(data);
    return updatedItem;
  }
  private async isDocumentInUse(document: number): Promise<void> {
    const item = await this.personRepository.getPerson({
      document,
    });
    if (item) {
      throw new ConflictException(`O documento ${document} já esta em uso`);
    }
  }
}
