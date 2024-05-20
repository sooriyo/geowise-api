import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Sensor } from '../../schemas/sensor.schema'
import { CreateSensorDTO, UpdateSensorDTO } from './sensor.entity'

@Injectable()
export class SensorService {

  constructor(
  @InjectRepository(Sensor) private sensorRepository: Repository<Sensor>,
) {}

  async findAll() {
    return await this.sensorRepository.find()
  }

  async find(id:number) {
    return await this.sensorRepository.findOneBy({ id })
  }

  async create(createSensorDTO:CreateSensorDTO) {
    return await this.sensorRepository.save(createSensorDTO)
  }

  async update(id:number,updateSensorDTO:UpdateSensorDTO) {
    const result=await this.sensorRepository.update(id, updateSensorDTO)
    return this.sensorRepository.findOneBy({ id });
  }


}
