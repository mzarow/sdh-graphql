import { Module } from '@nestjs/common';
import { ProductsService } from './services/products.service';

@Module({
  exports: [ProductsService],
  providers: [ProductsService],
})
export class ProductsModule {}
