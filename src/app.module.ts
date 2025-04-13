import { Module } from '@nestjs/common';
import { UserModule } from './infra/Graphql/UserGraphql/UserModule';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { CarePackageItemModule } from './infra/Graphql/CarePackageItemGraphql/CarePackageItemModule';

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
  ],
})
export class AppModule {}
