/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, JoinTable, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Item } from "../item/item.entity";

@Entity()
export class Product {
        @PrimaryGeneratedColumn()
        id: number;

        @Column()
        status: string;

        @Column()
        category: string;

        @Column({ type: 'date' })
        plannedDeliveryDate: Date

        @OneToMany(type => Item, item => item.owner)
        item: Item[];
}