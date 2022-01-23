import { Injectable } from '@nestjs/common';
import { Product } from '../models/product.model';
import { productsData } from '../common/consts/products-data.const';

export interface ProductsServiceInterface {
  findMany(ids: number[]): Product[];
}

@Injectable()
export class ProductsService implements ProductsServiceInterface {
  public findMany(ids: number[]): Product[] {
    return productsData.filter((product) => ids.includes(product.id));
  }
}
