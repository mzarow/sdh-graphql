import { Module } from '@nestjs/common';
import { OrdersService } from './services/orders.service';
import { ProductsModule } from '../products/products.module';
import { OrdersProductsService } from './services/orders-products.service';
import { OrdersResolver } from './resolvers/orders.resolver';

@Module({
  providers: [OrdersResolver, OrdersService, OrdersProductsService],
  exports: [OrdersService],
  imports: [ProductsModule],
})
export class OrdersModule {}
