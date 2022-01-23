import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { Order } from '../models/order.model';
import {
  OrdersService,
  OrdersServiceInterface,
} from '../services/orders.service';
import { Product } from '../../products/models/product.model';
import {
  OrdersProductsService,
  OrdersProductsServiceInterface,
} from '../services/orders-products.service';
import { UpdateOrderArgsDto } from '../dto/update-order-args.dto';

@Resolver(() => Order)
export class OrdersResolver {
  constructor(
    @Inject(OrdersService)
    private readonly ordersService: OrdersServiceInterface,
    @Inject(OrdersProductsService)
    private readonly ordersProductsService: OrdersProductsServiceInterface,
  ) {}

  @Query(() => [Order], { name: 'orders' })
  public getOrders(): Order[] {
    return this.ordersService.find();
  }

  @Mutation(() => Order)
  public updateOrderStatus(@Args() args: UpdateOrderArgsDto): Order {
    return this.ordersService.updateStatus(args);
  }

  @ResolveField('products', () => [Product])
  public getProducts(@Parent() order: Order): Product[] {
    return this.ordersProductsService.getProductsByOrderId(order.id);
  }
}
