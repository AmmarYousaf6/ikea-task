import { Item } from "../item/item.entity";
export declare class Product {
    id: number;
    status: string;
    category: string;
    plannedDeliveryDate: Date;
    item: Item[];
}
