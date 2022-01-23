import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field(() => Int)
  public id: number;

  @Field()
  public name: string;

  @Field()
  public description: string;

  @Field(() => Int)
  public price: number;
}
