import { Args, Resolver } from '@nestjs/graphql';
import { ChildModel } from './ChildModel';
import { Query } from '@nestjs/graphql';

import { GetAllCarePacakageItemInput } from '../CarePackageItemGraphql/Inputs/GetAllCarePackageItemInput';
import { UseGuards } from '@nestjs/common';
import { GetAllChildUseCase } from 'src/app/UseCases/ChildUseCase/GetAllChildrenUseCase';
import { GraphQlAuthGuard } from '../../Guard/GraphQlAuthGuard';

@UseGuards(GraphQlAuthGuard)
@Resolver(() => ChildModel)
export class ChildResolver {
  constructor(private readonly getAllChildUseCase: GetAllChildUseCase) {}

  @Query(() => [ChildModel])
  async getAllChilds(
    @Args() request: GetAllCarePacakageItemInput,
  ): Promise<ChildModel[]> {
    return await this.getAllChildUseCase.execute(request);
  }
}
