import { BaseEntity } from 'typeorm';
import { Crop } from './crop.schema';
export declare class CropBudget extends BaseEntity {
    id: number;
    totalCost: number;
    expectedRevenue: number;
    expectedProfit: number;
    crop: Crop;
}
