import { ArgsType, Field, Int } from '@nestjs/graphql';
import { OrderStatus } from '../common/enums/order-status.enum';

@ArgsType()
export class UpdateOrderArgsDto {
  @Field(() => Int)
  public id: number;

  @Field(() => OrderStatus)
  public status: OrderStatus;
}
