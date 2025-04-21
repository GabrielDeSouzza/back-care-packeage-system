import { Args, Int, Mutation, Resolver } from '@nestjs/graphql';
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
import { UseGuards } from '@nestjs/common';
import { GraphQlAuthGuard } from '../../Guard/GraphQlAuthGuard';
import { CountCarePackageItemUseCase } from 'src/app/UseCases/CarePackageItem/CountCarePackageItemUseCase';
import { CountCarePackageItemInput } from './Inputs/CountCarePackageItemInput';
import { GetAllCarePackageItemUseCase } from 'src/app/UseCases/CarePackageItem/GetAllCarePackageItemUseCase';
import { GetAllCarePacakageItemInput } from './Inputs/GetAllCarePackageItemInput';

@UseGuards(GraphQlAuthGuard)
@Resolver(() => CarePackageItemModel)
export class CarePackageItemResolver {
  constructor(
    private readonly createCarePackageItemUseCase: CreateCarePackageItemUseCase,
    private readonly updateCarePackageItemUseCase: UpdateCarePackageItemUseCase,
    private readonly getCarePackageItemUseCase: GetCarePackageItemUseCase,
    private readonly countCarePackageItemUseCase: CountCarePackageItemUseCase,
    private readonly getAllCarePackageItemUseCase: GetAllCarePackageItemUseCase,
  ) {}
  @Query(() => Int)
  async countCarePackageItems(
    @Args() request: CountCarePackageItemInput,
  ): Promise<number> {
    return await this.countCarePackageItemUseCase.execute(request);
  }
  @Query(() => [CarePackageItemModel])
  async getAllCarePackageItems(
    @Args() request: GetAllCarePacakageItemInput,
  ): Promise<CarePackageItemModel[]> {
    console.log(request);
    return await this.getAllCarePackageItemUseCase.execute(request);
  }
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
