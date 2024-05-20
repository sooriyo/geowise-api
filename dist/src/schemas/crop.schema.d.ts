import { BaseEntity } from 'typeorm';
import { Polytunnel } from './polytunnel.schema';
import { CropBudget } from './cropBudget.schema';
import { FertilizerSchedule } from './fertilizerShedule.schema';
export declare class Crop extends BaseEntity {
    id: number;
    name: string;
    variety: string;
    plantDate: Date;
    cropeAmount: Number;
    polytunnel: Polytunnel;
    cropBudgets: CropBudget[];
    fertilizerSchedules: FertilizerSchedule[];
}
