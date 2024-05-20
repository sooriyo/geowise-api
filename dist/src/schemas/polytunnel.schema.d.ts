import { BaseEntity } from 'typeorm';
import { User } from './user.schema';
import { Crop } from './crop.schema';
import { Sensor } from './sensor.schema';
import { Actuator } from './actuator.schema';
export declare class Polytunnel extends BaseEntity {
    id: number;
    name: string;
    location: string;
    area: number;
    user: User;
    crops: Crop[];
    sensors: Sensor[];
    actuators: Actuator[];
}
