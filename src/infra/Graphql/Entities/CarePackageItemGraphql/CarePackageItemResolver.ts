import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CarePackageItemModel } from './CarePackageItemModel';
import { Query } from '@nestjs/graphql';
import { CreateCarePackageItemInput } from './Inputs/CreateCarePackageItemInput';
import { UpdateCarePackageItemInput } from './Inputs/UpdateCarePackageItemInput';
import { CreateCarePackageItemUseCase } from 'src/app/UseCases/CarePackageItem/CreateCarePackageItemUseCase';
import { GetCarePackageItemInput } from './Inputs/GetCarePackageItem';
import { UpdateCarePackageItemUseCase } from 'src/app/UseCases/CarePackageItem/UpdateCarePackageItemUseCase';
import { GetCarePackageItemUseCase } from 'src/app/UseCases/CarePackageItem/GetCarePackageItemUse';
import { GetCurrentUser } from '../../Decorators/GetCurrentUserDecorator';
import { UserEntity } from 'src/domain/Entities/User/UserEntity';
import { Get, UseGuards } from '@nestjs/common';
import { GraphQlAuthGuard } from '../../Guard/GraphQlAuthGuard';

@UseGuards(GraphQlAuthGuard)
@Resolver(() => CarePackageItemModel)
export class CarePackageItemResolver {
  constructor(
    private readonly createCarePackageItemUseCase: CreateCarePackageItemUseCase,
    private readonly updateCarePackageItemUseCase: UpdateCarePackageItemUseCase,
    private readonly getCarePackageItemUseCase: GetCarePackageItemUseCase,
  ) {}

  @Query(() => CarePackageItemModel)
  async getCarePackageItem(@Args('request') request: GetCarePackageItemInput) {
    return await this.getCarePackageItemUseCase.execute(request);
  }

  @Mutation(() => CarePackageItemModel)
  async createCarePackageItem(
    @Args('data') data: CreateCarePackageItemInput,
    @GetCurrentUser() user: UserEntity,
  ) {
    data.createdBy = user.id;
    data.updatedBy = user.id;
    return await this.createCarePackageItemUseCase.execute(data);
  }

  @Mutation(() => CarePackageItemModel)
  async updateCarePackageItem(
    @Args('data') data: UpdateCarePackageItemInput,
    @GetCurrentUser() user: UserEntity,
  ) {
    data.updatedBy = user.id;
    return await this.updateCarePackageItemUseCase.execute(data);
  }
}
