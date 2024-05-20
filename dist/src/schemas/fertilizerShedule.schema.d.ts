import { BaseEntity } from 'typeorm';
import { Crop } from './crop.schema';
export declare class FertilizerSchedule extends BaseEntity {
    id: number;
    name: string;
    startDate: Date;
    details: string;
    crop: Crop;
}
