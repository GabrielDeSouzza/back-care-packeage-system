import { Args, Int, Mutation, Resolver } from '@nestjs/graphql';
import { TypeCarePackageModel } from './TypeCarePackageModel';
import { Query } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { CountTypeCarePackageUseCase } from 'src/app/UseCases/TypeCarePackageUseCases /CountTypeCarePackageUseCase';
import { CreateTypeCarePackageUseCase } from 'src/app/UseCases/TypeCarePackageUseCases /CreateTypeCarePackageUseCase';
import { GetAllTypeCarePackageUseCase } from 'src/app/UseCases/TypeCarePackageUseCases /GetAllTypeCarePackageUseCase';
import { GetTypeCarePackageUseCase } from 'src/app/UseCases/TypeCarePackageUseCases /GetTypeCarePackageUse';
import { UpdateTypeCarePackageUseCase } from 'src/app/UseCases/TypeCarePackageUseCases /UpdateTypeCarePackageUseCase';
import { UserEntity } from 'src/domain/Entities/User/UserEntity';
import { GetCurrentUser } from '../../Decorators/GetCurrentUserDecorator';
import { GraphQlAuthGuard } from '../../Guard/GraphQlAuthGuard';
import { CreateTypeCarePackageInput } from './Inputs/CreateTypeCarePackageInput';
import { GetTypeCarePackageInput } from './Inputs/GetTypeCarePackageInput';
import { UpdateTypeCarePackageInput } from './Inputs/UpdateTypeCarePackageInput';
import { CountTypeCarePackageInput } from './Inputs/CountTypeCarePackageInput';
import { GetAllCarePacakageInput } from './Inputs/GetAllTypeCarePackageInput';

@UseGuards(GraphQlAuthGuard)
@Resolver(() => TypeCarePackageModel)
export class TypeCarePackageResolver {
  constructor(
    private readonly createTypeCarePackageUseCase: CreateTypeCarePackageUseCase,
    private readonly updateTypeCarePackageUseCase: UpdateTypeCarePackageUseCase,
    private readonly getTypeCarePackageUseCase: GetTypeCarePackageUseCase,
    private readonly countTypeCarePackageUseCase: CountTypeCarePackageUseCase,
    private readonly getAllTypeCarePackageUseCase: GetAllTypeCarePackageUseCase,
  ) {}
  @Query(() => Int)
  async countTypeCarePackages(
    @Args() request: CountTypeCarePackageInput,
  ): Promise<number> {
    return await this.countTypeCarePackageUseCase.execute(request);
  }
  @Query(() => [TypeCarePackageModel])
  async getAllTypeCarePackages(
    @Args() request: GetAllCarePacakageInput,
  ): Promise<TypeCarePackageModel[]> {
    return await this.getAllTypeCarePackageUseCase.execute(request);
  }
  @Query(() => TypeCarePackageModel)
  async getTypeCarePackage(@Args('request') request: GetTypeCarePackageInput) {
    return await this.getTypeCarePackageUseCase.execute(request);
  }

  @Mutation(() => TypeCarePackageModel)
  async createTypeCarePackage(
    @Args('data') data: CreateTypeCarePackageInput,
    @GetCurrentUser() user: UserEntity,
  ) {
    data.createdBy = user.id;
    data.updatedBy = user.id;
    return await this.createTypeCarePackageUseCase.execute(data);
  }

  @Mutation(() => TypeCarePackageModel)
  async updateTypeCarePackage(
    @Args('data') data: UpdateTypeCarePackageInput,
    @GetCurrentUser() user: UserEntity,
  ) {
    data.updatedBy = user.id;
    return await this.updateTypeCarePackageUseCase.execute(data);
  }
}
