/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import config from '../ormconfig';
import { Product } from './product/product.entity';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';

@Module({
  imports: [TypeOrmModule.forRoot(config), TypeOrmModule.forFeature([Product])],
  controllers: [AppController,ProductController],
  providers: [ProductService, AppService],
})
export class AppModule {}
