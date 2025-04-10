import { ChildEntity } from '../Entities/Child/ChildEntity';
import { CreateChildDto } from '../Entities/Child/Dto/CreateChildDto';
import { UpdateChildDto } from '../Entities/Child/Dto/UpdateChildDto';
import { GetChildDto } from '../Entities/Child/Dto/GetChildDto';

export abstract class ChildRepository {
  abstract createChild(data: CreateChildDto): Promise<ChildEntity>;
  abstract updateChild(data: UpdateChildDto): Promise<ChildEntity>;
  abstract getChild(request: GetChildDto): Promise<ChildEntity>;
}
