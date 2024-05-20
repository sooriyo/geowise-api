declare class NotificationEntity {
    title: string;
    parameter: string;
    thresholdValue: number;
    status: string;
    userId: number;
}
export declare class CreateNotificationDTO extends NotificationEntity {
}
export declare class UpdateNotificationDTO extends NotificationEntity {
}
export {};
