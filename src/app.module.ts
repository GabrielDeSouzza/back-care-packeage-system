import { Module } from '@nestjs/common';
import { UserModule } from './infra/Graphql/Entities/UserGraphql/UserModule';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { CarePackageItemModule } from './infra/Graphql/Entities/CarePackageItemGraphql/CarePackageItemModule';
import { SingInModule } from './infra/Graphql/Entities/SignInGraphql/SingInModule';
import { GuardModule } from './infra/Graphql/Guard/strategies/JwtModule';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/infra/schema.gql'),
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    UserModule,
    CarePackageItemModule,
    SingInModule,
    GuardModule,
  ],
})
export class AppModule {}
