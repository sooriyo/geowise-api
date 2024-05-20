import { Module } from '@nestjs/common';
import { SensorReadingService } from './sensor-reading.service';
import { SensorReadingController } from './sensor-reading.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Sensor } from '../../schemas/sensor.schema'
import { SensorReading } from '../../schemas/sensorReading.schema'

@Module({
  imports: [TypeOrmModule.forFeature([SensorReading])],
  controllers: [SensorReadingController],
  providers: [SensorReadingService],
})
export class SensorReadingModule {}
