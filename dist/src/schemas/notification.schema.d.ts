import { BaseEntity } from 'typeorm';
import { User } from './user.schema';
export declare class NotificationSchema extends BaseEntity {
    id: number;
    title: string;
    timestamp: Date;
    parameter: string;
    thresholdValue: number;
    status: string;
    user: User;
}
