import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CarePackageItemModel } from './CarePackageItemModel';
import { Query } from '@nestjs/graphql';
import { CreateCarePackageItemInput } from './Inputs/CreateCarePackageItemInput';
import { UpdateCarePackageItemInput } from './Inputs/UpdateCarePackageItemInput';
import { CreateCarePackageItemUseCase } from 'src/app/UseCases/CarePackageItem/CreateCarePackageItemUseCase';
import { GetCarePackageItemInput } from './Inputs/GetCarePackageItem';
import { UpdateCarePackageItemUseCase } from 'src/app/UseCases/CarePackageItem/UpdateCarePackageItemUseCase';
import { GetCarePackageItemUseCase } from 'src/app/UseCases/CarePackageItem/GetCarePackageItemUse';

@Resolver(() => CarePackageItemModel)
export class CarePackageItemResolver {
  constructor(
    private readonly createCarePackageItemUseCase: CreateCarePackageItemUseCase,
    private readonly updateCarePackageItemUseCase: UpdateCarePackageItemUseCase,
    private readonly getCarePackageItemUseCase: GetCarePackageItemUseCase,
  ) {}

  @Query(() => CarePackageItemModel)
  async getCarePackageItem(@Args() request: GetCarePackageItemInput) {
    return await this.getCarePackageItemUseCase.execute(request);
  }

  @Mutation(() => CarePackageItemModel)
  async createCarePackageItem(@Args('data') data: CreateCarePackageItemInput) {
    return await this.createCarePackageItemUseCase.execute(data);
  }

  @Mutation(() => CarePackageItemModel)
  async updateCarePackageItem(@Args('data') data: UpdateCarePackageItemInput) {
    return await this.updateCarePackageItemUseCase.execute(data);
  }
}
