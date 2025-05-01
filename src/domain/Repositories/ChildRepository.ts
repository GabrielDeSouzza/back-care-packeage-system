import { ChildEntity } from '../Entities/Child/ChildEntity';
import { WhereChildRequestDTO } from '../Entities/Child/Dto/WhereChildDto';

export abstract class ChildRepository {
  abstract getAllChildren(
    request?: WhereChildRequestDTO,
  ): Promise<ChildEntity[]>;
}
