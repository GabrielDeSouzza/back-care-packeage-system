import { Args, Int, Mutation, Resolver } from '@nestjs/graphql';
import { PersonModel } from './PersonModel';
import { Query } from '@nestjs/graphql';
import { CreatePersonInput } from './Inputs/CreatePersonInput';
import { UpdatePersonInput } from './Inputs/UpdatePersonInput';
import { GetCurrentUser } from '../../Decorators/GetCurrentUserDecorator';
import { UserEntity } from 'src/domain/Entities/User/UserEntity';
import { UseGuards } from '@nestjs/common';
import { GraphQlAuthGuard } from '../../Guard/GraphQlAuthGuard';
import { CountPersonUseCase } from 'src/app/UseCases/PersonUseCases/CountPersonUseCase';
import { CreatePersonUseCase } from 'src/app/UseCases/PersonUseCases/CreatePersonUseCase';
import { GetAllPersonUseCase } from 'src/app/UseCases/PersonUseCases/GetAllPersonUseCase';
import { GetPersonUseCase } from 'src/app/UseCases/PersonUseCases/GetPersonUse';
import { UpdatePersonUseCase } from 'src/app/UseCases/PersonUseCases/UpdatePersonUseCase';
import { GetAllCarePacakageItemInput } from '../CarePackageItemGraphql/Inputs/GetAllCarePackageItemInput';
import { GetPersonInput } from './Inputs/GetPersonInput';
import { CountPersonInput } from './Inputs/CountPersonInput';

@UseGuards(GraphQlAuthGuard)
@Resolver(() => PersonModel)
export class PersonResolver {
  constructor(
    private readonly createPersonUseCase: CreatePersonUseCase,
    private readonly updatePersonUseCase: UpdatePersonUseCase,
    private readonly getPersonUseCase: GetPersonUseCase,
    private readonly countPersonUseCase: CountPersonUseCase,
    private readonly getAllPersonUseCase: GetAllPersonUseCase,
  ) {}
  @Query(() => Int)
  async countPersons(@Args() request: CountPersonInput): Promise<number> {
    return await this.countPersonUseCase.execute(request);
  }
  @Query(() => [PersonModel])
  async getAllPersons(
    @Args() request: GetAllCarePacakageItemInput,
  ): Promise<PersonModel[]> {
    return await this.getAllPersonUseCase.execute(request);
  }
  @Query(() => PersonModel)
  async getPerson(@Args('request') request: GetPersonInput) {
    return await this.getPersonUseCase.execute(request);
  }

  @Mutation(() => PersonModel)
  async createPerson(
    @Args('data') data: CreatePersonInput,
    @GetCurrentUser() user: UserEntity,
  ) {
    data.createdBy = user.id;
    data.updatedBy = user.id;
    return await this.createPersonUseCase.execute(data);
  }

  @Mutation(() => PersonModel)
  async updatePerson(
    @Args('data') data: UpdatePersonInput,
    @GetCurrentUser() user: UserEntity,
  ) {
    data.updatedBy = user.id;
    return await this.updatePersonUseCase.execute(data);
  }
}
