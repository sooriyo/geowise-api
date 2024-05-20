import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Polytunnel } from '../../schemas/polytunnel.schema'
import { CreatePolytunnelDTO, UpdatePolytunnelDTO } from './polytunnel.entity'

@Injectable()
export class PolytunnelService {
  constructor(
    @InjectRepository(Polytunnel) private polytunnelRepository: Repository<Polytunnel>,
  ) {}

  async findAll() {
    return await this.polytunnelRepository.find()
  }

  async find(id:number) {
    return await this.polytunnelRepository.findOneBy({ id })
  }

  async create(createPolytunnelDTO:CreatePolytunnelDTO) {
    return await this.polytunnelRepository.save(createPolytunnelDTO)
  }

  async update(id:number,updatePolytunnelDTO:UpdatePolytunnelDTO) {
    const result=await this.polytunnelRepository.update(id, updatePolytunnelDTO)
    return this.polytunnelRepository.findOneBy({ id });
  }


}
