import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { ActuatorService } from './actuator.service';
import { CreateActuatorDTO, UpdateActuatorDTO } from './actuator.entity';
import { Actuator } from '../../schemas/actuator.schema';

@Controller()
export class ActuatorController {
  constructor(private readonly actuatorService: ActuatorService) {}

  @Get()
  async findAll(): Promise<Actuator[]> {
    return await this.actuatorService.findAll();
  }

  @Get('/:id')
  async findOne(@Param('id') id: number) {
    return await this.actuatorService.find(id);
  }

  @Post()
  async create(@Body() createActuatorDTO: CreateActuatorDTO) {
    return await this.actuatorService.create(createActuatorDTO);
  }

  @Put('/:id')
  async update(@Param('id') id: number, @Body() updateActuatorDTO: UpdateActuatorDTO){
    return await this.actuatorService.update(id, updateActuatorDTO);
  }
}
