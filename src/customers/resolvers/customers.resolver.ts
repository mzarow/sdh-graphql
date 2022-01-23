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
  CustomerService,
  CustomerServiceInterface,
} from '../services/customer.service';

@Resolver(() => Customer)
export class CustomerResolver {
  constructor(
    @Inject(CustomerService)
    private readonly customerService: CustomerServiceInterface,
  ) {}

  @Query(() => Customer)
  public customer(@Args('id', { type: () => Int }) id: number) {
    return this.customerService.findOneById(id);
  }

  @ResolveField()
  public orders(@Parent() customer: Customer) {}
}
