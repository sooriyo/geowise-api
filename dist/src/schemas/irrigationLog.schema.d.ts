import { BaseEntity } from 'typeorm';
import { Actuator } from './actuator.schema';
export declare class IrrigationLog extends BaseEntity {
    id: number;
    startTime: Date;
    endTime: Date;
    actuator: Actuator;
}
