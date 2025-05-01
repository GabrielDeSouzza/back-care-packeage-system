import { Injectable } from '@nestjs/common';
import { WhereChildRequestDTO } from 'src/domain/Entities/Child/Dto/WhereChildDto';
import { ChildEntity } from 'src/domain/Entities/Child/ChildEntity';
import { ChildRepository } from 'src/domain/Repositories/ChildRepository';

@Injectable()
export class GetAllChildUseCase {
  constructor(private readonly childRepository: ChildRepository) {}
  async execute(request: WhereChildRequestDTO): Promise<ChildEntity[]> {
    return this.childRepository.getAllChildren(request);
  }
}
