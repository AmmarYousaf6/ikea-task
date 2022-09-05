/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../product/product.entity';

@Injectable()
export class ProductService {

  constructor(@InjectRepository(Product) private productRepository: Repository<Product>){

  }

  getAll(): Promise<Product[]> {
    return this.productRepository.find({
      relations: ['item'],
      order: {
        id: "DESC", // "DESC" or "ASC",
        status: "ASC"
    }
    });
  }

  async getOneById(id: any): Promise<Product>{
    try{
      const product =  await this.productRepository.findOne({
        where: {
          id,
        },
        relations: ['item'],
      });
      return product;
    } catch (err){
      throw err;
    }
  }

  createProduct(product : Product){
    try{
      const newProduct = this.productRepository.create(product);
      return this.productRepository.save(newProduct);
    } catch (err){
      throw err;
    }
   
  } 

  async updateProduct(id: number, product : Product){

    try{

    const prod = await this.getOneById(id);

    prod.category = product.category;
    prod.status = product.status;
    prod.plannedDeliveryDate = product.plannedDeliveryDate;

    return this.productRepository.save(prod);
  } catch (err){
    throw err;
  }

  }

  async deleteProduct(id:any) : Promise<Product>{

    try{
    const prod = await this.getOneById(id);
    return await this.productRepository.remove(prod);
  } catch (err){
    throw err;
  }
  }

}
