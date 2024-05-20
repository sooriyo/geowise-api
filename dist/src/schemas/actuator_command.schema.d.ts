import { BaseEntity } from 'typeorm';
import { Actuator } from './actuator.schema';
export declare class Actuator_command extends BaseEntity {
    id: number;
    command: string;
    createdAt: Date;
    actuators: Actuator[];
}
