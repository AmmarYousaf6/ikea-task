import { Repository } from 'typeorm';
import { Product } from '../product/product.entity';
export declare class ProductService {
    private productRepository;
    constructor(productRepository: Repository<Product>);
    getAll(): Promise<Product[]>;
    getOneById(id: any): Promise<Product>;
    createProduct(product: Product): Promise<Product>;
    updateProduct(id: number, product: Product): Promise<Product>;
    deleteProduct(id: any): Promise<Product>;
}
