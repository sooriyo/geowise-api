import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { NotificationSchema } from '../../schemas/notification.schema'
import { CreateNotificationDTO, UpdateNotificationDTO } from './notification.entity'
import { Repository } from 'typeorm'

@Injectable()
export class NotificationService {
  constructor(
  @InjectRepository(NotificationSchema) private cropRepository: Repository<NotificationSchema>,
) {}

  async findAll() {
    return await this.cropRepository.find()
  }

  async find(id:number) {
    return await this.cropRepository.findOneBy({ id })
  }

  async create(createNotificationDTO:CreateNotificationDTO) {
    return await this.cropRepository.save(createNotificationDTO)
  }

  async update(id:number,updateNotificationDTO:UpdateNotificationDTO) {
    const result=await this.cropRepository.update(id, updateNotificationDTO)
    return this.cropRepository.findOneBy({ id });
  }


}
