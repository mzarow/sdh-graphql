import { registerEnumType } from '@nestjs/graphql';

export enum OrderStatus {
  ACTIVE = 'active',
  DELIVERED = 'delivered',
  CANCELLED = 'cancelled',
}

registerEnumType(OrderStatus, { name: 'OrderStatus' });
