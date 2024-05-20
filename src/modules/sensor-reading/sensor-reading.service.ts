import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { SensorReading } from '../../schemas/sensorReading.schema'
import { CreateSensorReadingDTO, UpdateSensorReadingDTO } from './sensor-reading.entity'
import { Repository } from 'typeorm'

@Injectable()
export class SensorReadingService {
  constructor(
    @InjectRepository(SensorReading) private sensorReadingRepository: Repository<SensorReading>,
  ) {}

  async findAll() {
    return await this.sensorReadingRepository.find()
  }

  async find(id:number) {
    return await this.sensorReadingRepository.findOneBy({ id })
  }

  async create(createSensorReadingDTO:CreateSensorReadingDTO) {
    return await this.sensorReadingRepository.save(createSensorReadingDTO)
  }

  async update(id:number,updateSensorReadingDTO:UpdateSensorReadingDTO) {
    const result=await this.sensorReadingRepository.update(id, updateSensorReadingDTO)
    return this.sensorReadingRepository.findOneBy({ id });
  }


}
