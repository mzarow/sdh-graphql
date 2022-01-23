import { Customer } from '../models/customer.model';
import { customersData } from '../common/consts/customers-data.const';
import { Injectable } from '@nestjs/common';

export interface CustomerServiceInterface {
  findOneById(id: number): Customer | undefined;
  findAll(): Customer[];
}

@Injectable()
export class CustomerService implements CustomerServiceInterface {
  public findAll(): Customer[] {
    return customersData;
  }

  public findOneById(id: number): Customer | undefined {
    return customersData.find((customer) => customer.id === id);
  }
}
