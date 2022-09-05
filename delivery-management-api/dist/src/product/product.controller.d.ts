import { ProductService } from './product.service';
import { Product } from './product.entity';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    getProducts(): Promise<Product[]>;
    getProductsById(param: any): Promise<Product>;
}
