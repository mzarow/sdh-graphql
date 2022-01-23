import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: `${process.cwd()}src/schema.gql`,
    }),
    CustomersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
