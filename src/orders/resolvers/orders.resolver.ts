import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Customer } from '../models/customer.model';
import { Inject } from '@nestjs/common';
import {
  CustomersService,
  CustomersServiceInterface,
} from '../services/customers.service';
import {
  OrdersService,
  OrdersServiceInterface,
} from '../../orders/services/orders.service';
import { GetCustomersArgsDto } from '../dto/get-customers-args.dto';
import { Order } from '../../orders/models/order.model';

@Resolver(() => Customer)
export class CustomersResolver {
  constructor(
    @Inject(CustomersService)
    private readonly customerService: CustomersServiceInterface,
    @Inject(OrdersService)
    private readonly ordersService: OrdersServiceInterface,
  ) {}

  @Query(() => [Customer], { name: 'customers' })
  public getCustomers(@Args() args: GetCustomersArgsDto) {
    return this.customerService.find(args);
  }

  @Query(() => Customer, { name: 'customer' })
  public getCustomer(@Args('id', { type: () => Int }) id: number) {
    return this.customerService.findOneById(id);
  }

  @ResolveField('orders', () => [Order])
  public getOrders(@Parent() customer: Customer) {
    return this.ordersService.findByCustomerId(customer.id);
  }
}
