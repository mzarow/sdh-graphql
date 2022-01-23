import { Module } from '@nestjs/common';
import { CustomersService } from './services/customers.service';
import { CustomersResolver } from './resolvers/customers.resolver';
import { OrdersModule } from '../orders/orders.module';

@Module({
  imports: [OrdersModule],
  providers: [CustomersResolver, CustomersService],
})
export class CustomersModule {}
