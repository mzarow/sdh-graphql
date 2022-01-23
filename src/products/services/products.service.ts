import { ordersData } from '../common/consts/orders-data.const';
import { Order } from '../models/order.model';
import { Injectable } from '@nestjs/common';

export interface OrdersServiceInterface {
  findByCustomerId(id: number): Order[];
}

@Injectable()
export class OrdersService implements OrdersServiceInterface {
  public findByCustomerId(id: number): Order[] {
    return ordersData.filter((order) => order.customerId === id);
  }
}
