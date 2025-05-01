import { PrismaService } from '../prismaService';
import { ChildRepository } from 'src/domain/Repositories/ChildRepository';
import { ChildEntity } from 'src/domain/Entities/Child/ChildEntity';
import { Injectable } from '@nestjs/common';
import { WhereChildRequestDTO } from 'src/domain/Entities/Child/Dto/WhereChildDto';
import { ChildMapper } from '../mappers/ChildMapper/ChildMapper';

@Injectable()
export class ChildPrismaServiceRepository implements ChildRepository {
  constructor(private prisma: PrismaService) {}

  async getAllChildren(request: WhereChildRequestDTO): Promise<ChildEntity[]> {
    const data = await this.prisma.child.findMany({
      where: request.where,
      take: request.limit,
      skip: request.offset,
    });
    return data.map((item) => ChildMapper.prismaToEntity(item));
  }
}
