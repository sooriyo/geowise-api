import { Module } from '@nestjs/common';
import { FertilizerSheduleService } from './fertilizer-shedule.service';
import { FertilizerSheduleController } from './fertilizer-shedule.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import { FertilizerSchedule } from '../../schemas/fertilizerShedule.schema'

@Module({
  imports: [TypeOrmModule.forFeature([FertilizerSchedule])],
  controllers: [FertilizerSheduleController],
  providers: [FertilizerSheduleService],
})
export class FertilizerSheduleModule {}
