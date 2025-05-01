import { Prisma, Child as ChildPrisma } from '@prisma/client';
import { ChildEntity } from 'src/domain/Entities/Child/ChildEntity';
import { CreateChildDto } from 'src/domain/Entities/Child/Dto/CreateChildDto';
import { UpdateChildDto } from 'src/domain/Entities/Child/Dto/UpdateChildDto';
export class ChildMapper {
  static prismaToEntity(data: ChildPrisma) {
    return new ChildEntity({
      createdAt: data.createdAt,
      createdBy: data.createdBy,
      id: data.id,
      name: data.name,
      updatedAt: data.updatedAt,
      updatedBy: data.updatedBy,
      birthdayDate: data.birthdayDate,
      lastName: data.lastName,
      responsibleId: data.responsibleId,
    });
  }
  static createChildPrisma(data: CreateChildDto) {
    const created: Prisma.ChildCreateInput = {
      createdAt: new Date(),
      CreatedBy: { connect: { id: data.createdBy } },
      name: data.name,
      updatedAt: new Date(),
      UpdatedBy: { connect: { id: data.updatedBy } },
      id: crypto.randomUUID(),
      birthdayDate: data.birthdayDate,
      lastName: data.lastName,
      PersonResponsible: {
        connect: { id: data.responsibleId },
      },
    };
    return created;
  }
  static updateChildPrisma(data: UpdateChildDto) {
    const updated: Prisma.ChildUpdateInput = {
      name: data?.name,
      updatedAt: new Date(),
      UpdatedBy: { connect: { id: data.updatedBy } },
      birthdayDate: data?.birthdayDate,
      lastName: data?.lastName,
      PersonResponsible: {
        update: {
          id: data.responsibleId,
        },
      },
    };
    return updated;
  }
}
