import { Prisma, Person as PersonPrisma } from '@prisma/client';
import { PersonEntity } from 'src/domain/Entities/Person/PersonEntity';
import { CreatePersonDto } from 'src/domain/Entities/Person/Dto/CreatePersonDto';
import { UpdatePersonDto } from 'src/domain/Entities/Person/Dto/UpdatePersonDto';
export class PersonMapper {
  static prismaToEntity(data: PersonPrisma) {
    return new PersonEntity({
      createdAt: data.createdAt,
      createdBy: data.createdBy,
      id: data.id,
      name: data.name,
      updatedAt: data.updatedAt,
      updatedBy: data.updatedBy,
      birthdayDate: data.birthdayDate,
      document: data.document,
      gender: data.gender,
      hasChild: data.hasChild,
      lastName: data.lastName,
    });
  }
  static createPersonPrisma(data: CreatePersonDto) {
    const created: Prisma.PersonCreateInput = {
      createdAt: new Date(),
      CreatedBy: { connect: { id: data.createdBy } },
      name: data.name,
      updatedAt: new Date(),
      UpdatedBy: { connect: { id: data.updatedBy } },
      id: crypto.randomUUID(),
      birthdayDate: data.birthdayDate,
      document: data.document,
      gender: data.gender,
      hasChild: data.hasChild,
      lastName: data.lastName,
      Child: data.children && {
        createMany: {
          data: data.children.map((child) => ({
            createdAt: new Date(),
            createdBy: data.createdBy,
            birthdayDate: child.birthdayDate,
            lastName: child.lastName,
            name: child.name,
            updatedAt: new Date(),
            updatedBy: data.updatedBy,
            id: crypto.randomUUID(),
          })),
        },
      },
    };
    return created;
  }
  static updatePersonPrisma(data: UpdatePersonDto) {
    const updated: Prisma.PersonUpdateInput = {
      name: data?.name,
      updatedAt: new Date(),
      UpdatedBy: { connect: { id: data.updatedBy } },
      birthdayDate: data?.birthdayDate,
      document: data?.newDocument,
      gender: data?.gender,
      hasChild: data?.hasChild,
      lastName: data?.lastName,
      Child: data?.children && {
        upsert: {
          create: {
            createdAt: new Date(),
            createdBy: data.updatedBy,
            birthdayDate: data.children[0].birthdayDate,
            lastName: data.children[0].lastName,
            name: data.children[0].name,
            updatedAt: new Date(),
            updatedBy: data.updatedBy,
            id: crypto.randomUUID(),
          },
          update: {
            birthdayDate: data.children[0].birthdayDate,
            lastName: data.children[0].lastName,
            name: data.children[0].name,
          },
          where: {
            id: data.children[0].id,
          },
        },
        disconnect: data.deletedChildrenIds?.map((id) => ({ id })),
      },
    };
    return updated;
  }
}
