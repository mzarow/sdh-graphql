import { Field, Int, ObjectType } from '@nestjs/graphql';
import { OrderStatus } from '../common/enums/order-status.enum';
import { Product } from '../../products/models/product.model';

@ObjectType()
export class Order {
  @Field(() => Int)
  public id: number;

  public customerId: number;

  @Field()
  public status: OrderStatus;

  @Field()
  public createdAt: Date;

  @Field(() => [Product])
  public products: Product[];
}
