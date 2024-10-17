import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common'
import { SensorService } from './sensor.service'
import { CreateSensorDTO, SensorData, UpdateSensorDTO } from './sensor.entity'
import { MqttService } from '../mqtt/mqtt.service'

@Controller()
export class SensorController {
  constructor(private readonly sensorService: SensorService,private readonly mqttService: MqttService) {
  }

  @Post('send')
  sendData(@Body() data: SensorData): string {
    const topic = 'geowise/sensor';
    const message = JSON.stringify(data);
    // this.mqttService.publish(topic, message);
    return 'Data sent to ESP32';
  }

  @Get('/:id')
  async find(@Param('id') id: number) {
    return this.sensorService.find(id)
  }

  @Post()
  async create(@Body() createSensorDTO: CreateSensorDTO) {
    return this.sensorService.create(createSensorDTO)
  }

  @Put('/:id')
  async update(@Param('id') id: number, @Body() updateSensorDTO: UpdateSensorDTO) {
    return this.sensorService.update(id, updateSensorDTO)
  }

  @Get()
  async findAll() {
    return this.sensorService.findAll()
  }
}
