import { NotificationService } from './notification.service';
import { CreateNotificationDTO, UpdateNotificationDTO } from './notification.entity';
import { NotificationSchema } from '../../schemas/notification.schema';
export declare class NotificationController {
    private readonly notificationService;
    constructor(notificationService: NotificationService);
    findAll(): Promise<NotificationSchema[]>;
    findOne(id: number): Promise<NotificationSchema>;
    create(createNotificationDTO: CreateNotificationDTO): Promise<NotificationSchema>;
    update(id: number, updateNotificationDTO: UpdateNotificationDTO): Promise<NotificationSchema>;
}
