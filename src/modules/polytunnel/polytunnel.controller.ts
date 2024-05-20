import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { PolytunnelService } from './polytunnel.service';
import { CreatePolytunnelDTO, UpdatePolytunnelDTO } from './polytunnel.entity';

@Controller()
export class PolytunnelController {
  constructor(private readonly polytunnelService: PolytunnelService) {}

  @Get()
  async findAll() {
    return this.polytunnelService.findAll();
  }

  @Get('/:id')
  async find(@Param('id') id: number) {
    return this.polytunnelService.find(id);
  }

  @Post()
  async create(@Body() createPolytunnelDTO: CreatePolytunnelDTO) {
    return this.polytunnelService.create(createPolytunnelDTO);
  }

  @Put('/:id')
  async update(@Param('id') id: number, @Body() updatePolytunnelDTO: UpdatePolytunnelDTO) {
    return this.polytunnelService.update(id, updatePolytunnelDTO);
  }
}
