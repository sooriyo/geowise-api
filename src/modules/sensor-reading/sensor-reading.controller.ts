import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { SensorReadingService } from './sensor-reading.service';
import { CreateSensorReadingDTO, UpdateSensorReadingDTO } from './sensor-reading.entity';

@Controller('reading')
export class SensorReadingController {
  constructor(private readonly sensorReadingService: SensorReadingService) {}

  @Get()
  async findAll() {
    return this.sensorReadingService.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: number) {
    return this.sensorReadingService.find(id);
  }

  @Post()
  async create(@Body() createSensorReadingDTO: CreateSensorReadingDTO) {
    return this.sensorReadingService.create(createSensorReadingDTO);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateSensorReadingDTO: UpdateSensorReadingDTO) {
    return this.sensorReadingService.update(id, updateSensorReadingDTO);
  }
}
