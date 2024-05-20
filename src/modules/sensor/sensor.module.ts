import { Module } from '@nestjs/common';
import { SensorService } from './sensor.service';
import { SensorController } from './sensor.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Sensor } from '../../schemas/sensor.schema'
import { MqttService } from '../mqtt/mqtt.service'

@Module({
  imports: [TypeOrmModule.forFeature([Sensor])],
  controllers: [SensorController],
  providers: [SensorService,MqttService],
})
export class SensorModule {}
