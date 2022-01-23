import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class GetCustomersArgsDto {
  @Field({ nullable: true })
  public firstName?: string;

  @Field({ nullable: true })
  public lastName?: string;
}
