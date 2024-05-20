import { Injectable } from '@nestjs/common'
import { FertilizerSchedule } from '../../schemas/fertilizerShedule.schema'
import { InjectRepository } from '@nestjs/typeorm'
import { CreateFertilizerSheduleDTO } from './fertilizer-shedule.entity'
import { Repository } from 'typeorm'

@Injectable()
export class FertilizerSheduleService {

  constructor(
    @InjectRepository(FertilizerSchedule) private cropRepository: Repository<FertilizerSchedule>,
  ) {
  }

  async findAll() {
    return await this.cropRepository.find()
  }

  async find(id: number) {
    return await this.cropRepository.findOneBy({ id })
  }

  async create(createFertilizerSheduleDTO: CreateFertilizerSheduleDTO) {
    return await this.cropRepository.save(createFertilizerSheduleDTO)
  }

  async update(id: number, updateFertilizerSheduleDTO: CreateFertilizerSheduleDTO) {
    const result = await this.cropRepository.update(id, updateFertilizerSheduleDTO)
    return this.cropRepository.findOneBy({ id })
  }


}


