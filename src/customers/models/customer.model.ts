import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Order } from '../../orders/models/order.model';

@ObjectType()
export class Customer {
  @Field(() => Int)
  public id: number;

  @Field()
  public firstName: string;

  @Field()
  public lastName: string;

  @Field(() => [Order])
  public orders: Order[];
}
