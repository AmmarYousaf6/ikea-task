/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('product')
  getProducts(): Promise<Product[]> {
    return this.productService.getAll();
  }

  @Get('product/:id')
  getProductsById(@Param() param): Promise<Product> {
    return this.productService.getOneById(param.id);
  }
}
