import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { CropBudgetService } from './crop-budget.service';
import { CreateCropBudgetDTO } from './crop-budget.entity';
import { CropBudget } from '../../schemas/cropBudget.schema';

@Controller('budget')
export class CropBudgetController {
  constructor(private readonly cropBudgetService: CropBudgetService) {}

  @Get()
  async findAll(): Promise<CropBudget[]> {
    return await this.cropBudgetService.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: number): Promise<CropBudget> {
    return await this.cropBudgetService.find(id);
  }

  @Post()
  async create(@Body() createCropBudgetDTO: CreateCropBudgetDTO): Promise<CropBudget> {
    return await this.cropBudgetService.create(createCropBudgetDTO);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateCropBudgetDTO: CreateCropBudgetDTO): Promise<CropBudget> {
    return await this.cropBudgetService.update(id, updateCropBudgetDTO);
  }
}
