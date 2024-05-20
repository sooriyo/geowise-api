import { Module } from '@nestjs/common';
import { IrrigationLogsService } from './irrigation-logs.service';
import { IrrigationLogsController } from './irrigation-logs.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Sensor } from '../../schemas/sensor.schema'
import { IrrigationLog } from '../../schemas/irrigationLog.schema'

@Module({
  imports: [TypeOrmModule.forFeature([IrrigationLog])],
  controllers: [IrrigationLogsController],
  providers: [IrrigationLogsService],
})
export class IrrigationLogsModule {}
