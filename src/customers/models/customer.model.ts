import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Order {
  @Field(() => Int)
  public id: number;

  @Field()
  public status: string;
}
