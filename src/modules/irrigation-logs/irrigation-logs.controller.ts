import { Controller, Get, Param } from '@nestjs/common';
import { IrrigationLogsService } from './irrigation-logs.service';
import { IrrigationLog } from '../../schemas/irrigationLog.schema';

@Controller()
export class IrrigationLogsController {
  constructor(private readonly irrigationLogsService: IrrigationLogsService) {}

  @Get()
  async findAll(): Promise<IrrigationLog[]> {
    return await this.irrigationLogsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<IrrigationLog> {
    return await this.irrigationLogsService.find(id);
  }
}
