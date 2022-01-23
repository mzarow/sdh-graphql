import { Product } from '../../products/models/product.model';
import { Inject, Injectable } from '@nestjs/common';
import {
  ProductsService,
  ProductsServiceInterface,
} from '../../products/services/products.service';
import { ordersProductsData } from '../common/consts/orders-data.const';

export interface OrdersProductsServiceInterface {
  getProductsByOrderId(id: number): Product[];
}

@Injectable()
export class OrdersProductsService implements OrdersProductsServiceInterface {
  constructor(
    @Inject(ProductsService)
    private readonly productsService: ProductsServiceInterface,
  ) {}

  public getProductsByOrderId(id: number): Product[] {
    const productsIds = ordersProductsData
      .filter((order) => order.orderId === id)
      .map((order) => order.productId);

    return this.productsService.findMany(productsIds);
  }
}
