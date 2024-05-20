import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { FertilizerSheduleService } from './fertilizer-shedule.service';
import { CreateFertilizerSheduleDTO } from './fertilizer-shedule.entity';
import { FertilizerSchedule } from '../../schemas/fertilizerShedule.schema';

@Controller()
export class FertilizerSheduleController {
  constructor(private readonly fertilizerScheduleService: FertilizerSheduleService) {}

  @Get()
  async findAll(): Promise<FertilizerSchedule[]> {
    return await this.fertilizerScheduleService.findAll();
  }

  @Get('/:id')
  async findOne(@Param('id') id: number): Promise<FertilizerSchedule> {
    return await this.fertilizerScheduleService.find(id);
  }

  @Post()
  async create(@Body() createFertilizerSheduleDTO: CreateFertilizerSheduleDTO): Promise<FertilizerSchedule> {
    return await this.fertilizerScheduleService.create(createFertilizerSheduleDTO);
  }

  @Put('/:id')
  async update(@Param('id') id: number, @Body() updateFertilizerSheduleDTO: CreateFertilizerSheduleDTO): Promise<FertilizerSchedule> {
    return await this.fertilizerScheduleService.update(id, updateFertilizerSheduleDTO);
  }
}
