import { Args, Int, Mutation, Resolver } from '@nestjs/graphql';
import { CarePackageScheduleModel } from './CarePackageScheduleModel';
import { Query } from '@nestjs/graphql';
import { CreateCarePackageScheduleInput } from './Inputs/CreateCarePackageScheduleInput';
import { UpdateCarePackageScheduleInput } from './Inputs/UpdateCarePackageScheduleInput';
import { UseGuards } from '@nestjs/common';
import { CountCarePackageScheduleUseCase } from 'src/app/UseCases/CarePackageScheduleUseCases/CountCarePackageScheduleUseCase';
import { CreateCarePackageScheduleUseCase } from 'src/app/UseCases/CarePackageScheduleUseCases/CreateCarePackageScheduleUseCase';
import { GetAllCarePackageScheduleUseCase } from 'src/app/UseCases/CarePackageScheduleUseCases/GetAllCarePackageScheduleUseCase';
import { GetCarePackageScheduleUseCase } from 'src/app/UseCases/CarePackageScheduleUseCases/GetCarePackageScheduleUse';
import { UpdateCarePackageScheduleUseCase } from 'src/app/UseCases/CarePackageScheduleUseCases/UpdateCarePackageScheduleUseCase';
import { UserEntity } from 'src/domain/Entities/User/UserEntity';
import { GetCurrentUser } from '../../Decorators/GetCurrentUserDecorator';
import { GraphQlAuthGuard } from '../../Guard/GraphQlAuthGuard';
import { CountCarePackageScheduleInput } from './Inputs/CountCarePackageScheduleInput';
import { GetCarePackageScheduleInput } from './Inputs/GetCarePackageScheduleInput';
import { GetAllCarePackageScheduleInput } from './Inputs/GetAllCarePackageScheduleInput';

@UseGuards(GraphQlAuthGuard)
@Resolver(() => CarePackageScheduleModel)
export class CarePackageScheduleResolver {
  constructor(
    private readonly createCarePackageScheduleUseCase: CreateCarePackageScheduleUseCase,
    private readonly updateCarePackageScheduleUseCase: UpdateCarePackageScheduleUseCase,
    private readonly getCarePackageScheduleUseCase: GetCarePackageScheduleUseCase,
    private readonly countCarePackageScheduleUseCase: CountCarePackageScheduleUseCase,
    private readonly getAllCarePackageScheduleUseCase: GetAllCarePackageScheduleUseCase,
  ) {}
  @Query(() => Int)
  async countCarePackageSchedules(
    @Args() request: CountCarePackageScheduleInput,
  ): Promise<number> {
    return await this.countCarePackageScheduleUseCase.execute(request);
  }
  @Query(() => [CarePackageScheduleModel])
  async getAllCarePackageSchedules(
    @Args() request: GetAllCarePackageScheduleInput,
  ): Promise<CarePackageScheduleModel[]> {
    return this.getAllCarePackageScheduleUseCase.execute(request);
  }
  @Query(() => CarePackageScheduleModel)
  async getCarePackageSchedule(
    @Args('request') request: GetCarePackageScheduleInput,
  ) {
    return await this.getCarePackageScheduleUseCase.execute(request);
  }

  @Mutation(() => CarePackageScheduleModel)
  async createCarePackageSchedule(
    @Args('data') data: CreateCarePackageScheduleInput,
    @GetCurrentUser() user: UserEntity,
  ) {
    data.createdBy = user.id;
    data.updatedBy = user.id;
    return await this.createCarePackageScheduleUseCase.execute(data);
  }

  @Mutation(() => CarePackageScheduleModel)
  async updateCarePackageSchedule(
    @Args('data') data: UpdateCarePackageScheduleInput,
    @GetCurrentUser() user: UserEntity,
  ) {
    data.updatedBy = user.id;
    return await this.updateCarePackageScheduleUseCase.execute(data);
  }
}
