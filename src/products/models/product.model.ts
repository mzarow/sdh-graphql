import { Field, Int, ObjectType } from '@nestjs/graphql';
import { OrderStatus } from '../common/enums/order-status.enum';

@ObjectType()
export class Order {
  @Field(() => Int)
  public id: number;

  public customerId: number;

  @Field()
  public status: OrderStatus;

  @Field()
  public createdAt: Date;
}
