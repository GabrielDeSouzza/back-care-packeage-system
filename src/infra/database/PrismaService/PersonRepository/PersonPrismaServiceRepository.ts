import { CreatePersonDto } from 'src/domain/Entities/Person/Dto/CreatePersonDto';
import { PrismaService } from '../prismaService';
import { PersonRepository } from 'src/domain/Repositories/PersonRepository';
import { PersonEntity } from 'src/domain/Entities/Person/PersonEntity';
import { UpdatePersonDto } from 'src/domain/Entities/Person/Dto/UpdatePersonDto';
import { Injectable } from '@nestjs/common';
import {
  CountPersonDTO,
  WherePersonRequestDTO,
} from 'src/domain/Entities/Person/Dto/WherePersonDto';
import { PersonMapper } from '../mappers/PersonMapper/MapperMapper';
import { GetPersonDto } from 'src/domain/Entities/Person/Dto/GetPersonDto';

@Injectable()
export class PersonPrismaServiceRepository implements PersonRepository {
  constructor(private prisma: PrismaService) {}
  async countPersons(request: CountPersonDTO): Promise<number> {
    return this.prisma.person.count(request);
  }
  async getAllPersons(request: WherePersonRequestDTO): Promise<PersonEntity[]> {
    const data = await this.prisma.person.findMany({
      where: request.where,
      take: request.limit,
      skip: request.offset,
    });
    return data.map((item) => PersonMapper.prismaToEntity(item));
  }
  async createPerson(data: CreatePersonDto) {
    const personData = PersonMapper.createPersonPrisma(data);
    const dataPrisma = await this.prisma.person.create({
      data: personData,
    });
    return PersonMapper.prismaToEntity(dataPrisma);
  }
  async updatePerson(data: UpdatePersonDto): Promise<PersonEntity> {
    const personData = PersonMapper.updatePersonPrisma(data);
    return PersonMapper.prismaToEntity(
      await this.prisma.person.update({
        where: { document: data.oldDocument },
        data: personData,
      }),
    );
  }
  async getPerson(request: GetPersonDto): Promise<PersonEntity> {
    const data = await this.prisma.person.findFirst({
      where: {
        OR: [{ id: request.id }, { document: request.document }],
      },
    });
    return data ? PersonMapper.prismaToEntity(data) : undefined;
  }
}
