/* eslint-disable prettier/prettier */
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { Product } from "../product/product.entity";
@Entity()
export class Item {
        @PrimaryGeneratedColumn()
        itemId: number;

        @Column()
        name: string;

        @Column()
        quantity: string;

        @ManyToOne(() => Product, (product) => product.id)
        owner: Product


}