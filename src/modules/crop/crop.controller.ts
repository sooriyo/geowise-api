import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { CropService } from './crop.service';
import { CreateCropDTO, UpdateCropDTO } from './crop.entity';
import { Crop } from '../../schemas/crop.schema';

@Controller()
export class CropController {
  constructor(private readonly cropService: CropService) {}

  @Get()
  async findAll(): Promise<Crop[]> {
    return await this.cropService.findAll();
  }

  @Get('/:id')
  async findOne(@Param('id') id: number): Promise<Crop> {
    return await this.cropService.find(id);
  }

  @Post()
  async create(@Body() createCropDTO: CreateCropDTO): Promise<Crop> {
    return await this.cropService.create(createCropDTO);
  }

  @Put('/:id')
  async update(@Param('id') id: number, @Body() updateCropDTO: UpdateCropDTO): Promise<Crop> {
    return await this.cropService.update(id, updateCropDTO);
  }
}
