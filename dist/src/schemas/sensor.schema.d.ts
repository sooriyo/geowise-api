import { BaseEntity } from 'typeorm';
import { Polytunnel } from './polytunnel.schema';
import { SensorReading } from './sensorReading.schema';
export declare class Sensor extends BaseEntity {
    id: number;
    name: string;
    sensorId: string;
    type: string;
    isActive: boolean;
    polytunnel: Polytunnel;
    sensorReadings: SensorReading[];
}
