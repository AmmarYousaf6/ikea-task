"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const product_entity_1 = require("../product/product.entity");
let ProductService = class ProductService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    getAll() {
        return this.productRepository.find({
            relations: ['item'],
            order: {
                id: "DESC",
                status: "ASC"
            }
        });
    }
    async getOneById(id) {
        try {
            const product = await this.productRepository.findOne({
                where: {
                    id,
                },
                relations: ['item'],
            });
            return product;
        }
        catch (err) {
            throw err;
        }
    }
    createProduct(product) {
        try {
            const newProduct = this.productRepository.create(product);
            return this.productRepository.save(newProduct);
        }
        catch (err) {
            throw err;
        }
    }
    async updateProduct(id, product) {
        try {
            const prod = await this.getOneById(id);
            prod.category = product.category;
            prod.status = product.status;
            prod.plannedDeliveryDate = product.plannedDeliveryDate;
            return this.productRepository.save(prod);
        }
        catch (err) {
            throw err;
        }
    }
    async deleteProduct(id) {
        try {
            const prod = await this.getOneById(id);
            return await this.productRepository.remove(prod);
        }
        catch (err) {
            throw err;
        }
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map