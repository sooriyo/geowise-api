import { BaseEntity } from 'typeorm';
import { Sensor } from './sensor.schema';
export declare class SensorReading extends BaseEntity {
    id: number;
    timestamp: Date;
    temperature: number;
    humidity: number;
    soilMoisture: number;
    lightIntensity: number;
    sensor: Sensor;
}
