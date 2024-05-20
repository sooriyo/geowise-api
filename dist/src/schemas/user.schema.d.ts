import { BaseEntity } from 'typeorm';
import { Polytunnel } from './polytunnel.schema';
import { NotificationSchema } from './notification.schema';
export declare class User extends BaseEntity {
    id: number;
    userProfile: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    password: string;
    polytunnels: Polytunnel[];
    notifications: NotificationSchema[];
}
