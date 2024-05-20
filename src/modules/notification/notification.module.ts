import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Crop } from '../../schemas/crop.schema'
import { NotificationSchema } from '../../schemas/notification.schema'

@Module({
  imports: [TypeOrmModule.forFeature([NotificationSchema])],
  controllers: [NotificationController],
  providers: [NotificationService],
})
export class NotificationModule {}
