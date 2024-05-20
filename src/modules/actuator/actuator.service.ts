import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Actuator } from '../../schemas/actuator.schema'
import { CreateActuatorDTO, UpdateActuatorDTO } from './actuator.entity'
import { Repository } from 'typeorm'

@Injectable()
export class ActuatorService {  constructor(
  @InjectRepository(Actuator) private actuatorRepository: Repository<Actuator>,
) {}

  async findAll() {
    return await this.actuatorRepository.find()
  }

  async find(id:number) {
    return await this.actuatorRepository.findOneBy({ id })
  }

  async create(createActuatorDTO:CreateActuatorDTO) {
    return await this.actuatorRepository.save(createActuatorDTO)
  }

  async update(id:number,updateActuatorDTO:UpdateActuatorDTO) {
    const result=await this.actuatorRepository.update(id, updateActuatorDTO)
    return this.actuatorRepository.findOneBy({ id });
  }


}
