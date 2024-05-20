
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Crop } from '../../schemas/crop.schema'
import { CreateCropDTO, UpdateCropDTO } from './crop.entity'

@Injectable()
export class CropService {
  constructor(
    @InjectRepository(Crop) private cropRepository: Repository<Crop>,
  ) {}

  async findAll() {
    return await this.cropRepository.find()
  }

  async find(id:number) {
    return await this.cropRepository.findOneBy({ id })
  }

  async create(createCropDTO:CreateCropDTO) {
    return await this.cropRepository.save(createCropDTO)
  }

  async update(id:number,updateCropDTO:UpdateCropDTO) {
    const result=await this.cropRepository.update(id, updateCropDTO)
    return this.cropRepository.findOneBy({ id });
  }


}
