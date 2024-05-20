import { NotificationSchema } from '../../schemas/notification.schema';
import { CreateNotificationDTO, UpdateNotificationDTO } from './notification.entity';
import { Repository } from 'typeorm';
export declare class NotificationService {
    private cropRepository;
    constructor(cropRepository: Repository<NotificationSchema>);
    findAll(): Promise<NotificationSchema[]>;
    find(id: number): Promise<NotificationSchema>;
    create(createNotificationDTO: CreateNotificationDTO): Promise<CreateNotificationDTO & NotificationSchema>;
    update(id: number, updateNotificationDTO: UpdateNotificationDTO): Promise<NotificationSchema>;
}
