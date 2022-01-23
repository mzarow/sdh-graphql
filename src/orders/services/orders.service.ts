import { ordersData } from '../common/consts/orders-data.const';
import { Order } from '../models/order.model';
import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateOrderArgsDto } from '../dto/update-order-args.dto';

export interface OrdersServiceInterface {
  find(): Order[];
  findByCustomerId(id: number): Order[];
  updateStatus(args: UpdateOrderArgsDto): Order;
}

@Injectable()
export class OrdersService implements OrdersServiceInterface {
  public find(): Order[] {
    return ordersData;
  }

  public findByCustomerId(id: number): Order[] {
    return ordersData.filter((order) => order.customerId === id);
  }

  public updateStatus(args: UpdateOrderArgsDto): Order {
    const order = ordersData.find((order) => order.id === args.id);

    if (!order) {
      throw new NotFoundException('Order not found');
    }

    order.status = args.status;

    return order;
  }
}
