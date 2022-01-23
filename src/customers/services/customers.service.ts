import { Customer } from '../models/customer.model';
import { customersData } from '../common/consts/customers-data.const';
import { Injectable } from '@nestjs/common';
import { GetCustomersArgsDto } from '../dto/get-customers-args.dto';

export interface CustomersServiceInterface {
  find(args: GetCustomersArgsDto): Customer[];
  findOneById(id: number): Customer | undefined;
}

@Injectable()
export class CustomersService implements CustomersServiceInterface {
  public find(args: GetCustomersArgsDto): Customer[] {
    const filters = Object.entries(args);

    return customersData.filter((customer) =>
      filters
        .map(([property, value]) =>
          value ? customer[property] === value : true,
        )
        .every((filter) => filter),
    );
  }

  public findOneById(id: number): Customer | undefined {
    return customersData.find((customer) => customer.id === id);
  }
}
