import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { CreateNotificationDTO, UpdateNotificationDTO } from './notification.entity';
import { NotificationSchema } from '../../schemas/notification.schema';

@Controller()
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Get()
  async findAll(): Promise<NotificationSchema[]> {
    return await this.notificationService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<NotificationSchema> {
    return await this.notificationService.find(id);
  }

  @Post()
  async create(@Body() createNotificationDTO: CreateNotificationDTO): Promise<NotificationSchema> {
    return await this.notificationService.create(createNotificationDTO);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateNotificationDTO: UpdateNotificationDTO): Promise<NotificationSchema> {
    return await this.notificationService.update(id, updateNotificationDTO);
  }
}
