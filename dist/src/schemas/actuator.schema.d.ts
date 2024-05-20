import { BaseEntity } from 'typeorm';
import { Polytunnel } from './polytunnel.schema';
import { IrrigationLog } from './irrigationLog.schema';
import { Actuator_command } from './actuator_command.schema';
export declare class Actuator extends BaseEntity {
    id: number;
    actuatorId: string;
    name: string;
    type: string;
    isActive: boolean;
    controlCommand: string;
    polytunnel: Polytunnel;
    irrigationLogs: IrrigationLog[];
    actuator_command: Actuator_command[];
}
