import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { FertilizerSchedule } from '../../schemas/fertilizerShedule.schema'
import { Repository } from 'typeorm'
import { CreateFertilizerSheduleDTO } from '../fertilizer-shedule/fertilizer-shedule.entity'
import { CropBudget } from '../../schemas/cropBudget.schema'
import { CreateCropBudgetDTO } from './crop-budget.entity'

@Injectable()
export class CropBudgetService {
  constructor(
    @InjectRepository(CropBudget) private cropRepository: Repository<CropBudget>,
  ) {
  }

  async findAll() {
    return await this.cropRepository.find()
  }

  async find(id: number) {
    return await this.cropRepository.findOneBy({ id })
  }

  async create(createCropBudgetDTO: CreateCropBudgetDTO) {
    return await this.cropRepository.save(createCropBudgetDTO)
  }

  async update(id: number, updateCropBudgetDTO: CreateCropBudgetDTO) {
    const result = await this.cropRepository.update(id, updateCropBudgetDTO)
    return this.cropRepository.findOneBy({ id })
  }


}



