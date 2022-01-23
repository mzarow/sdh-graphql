import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class GetCustomerArgsDto {
  @Field()
  public firstName: string;

  @Field({ nullable: true })
  public lastName?: string;
}
