import { Order } from '../../models/order.model';
import { OrderStatus } from '../enums/order-status.enum';

export const ordersData: Order[] = [
  {
    id: 1,
    customerId: 1,
    status: OrderStatus.ACTIVE,
    createdAt: new Date(),
    products: [],
  },
  {
    id: 2,
    customerId: 2,
    status: OrderStatus.DELIVERED,
    createdAt: new Date(),
    products: [],
  },
  {
    id: 3,
    customerId: 1,
    status: OrderStatus.CANCELLED,
    createdAt: new Date(),
    products: [],
  },
  {
    id: 4,
    customerId: 2,
    status: OrderStatus.ACTIVE,
    createdAt: new Date(),
    products: [],
  },
];

export const ordersProductsData = [
  {
    id: 1,
    orderId: 1,
    productId: 1,
  },
  {
    id: 2,
    orderId: 1,
    productId: 2,
  },
  {
    id: 3,
    orderId: 2,
    productId: 1,
  },
  {
    id: 4,
    orderId: 3,
    productId: 1,
  },
  {
    id: 5,
    orderId: 4,
    productId: 3,
  },
  {
    id: 6,
    orderId: 4,
    productId: 2,
  },
];
