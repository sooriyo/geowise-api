import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { IrrigationLog } from '../../schemas/irrigationLog.schema'
import { Repository } from 'typeorm'

@Injectable()
export class IrrigationLogsService {
  constructor(
    @InjectRepository(IrrigationLog) private sensorRepository: Repository<IrrigationLog>,
  ) {
  }

  async findAll() {
    return await this.sensorRepository.find()
  }

  async find(id: number) {
    return await this.sensorRepository.findOneBy({ id })
  }

  //
  // async create(createIrrigationLogsDTO:CreateIrrigationLogsDTO) {
  //   return await this.sensorRepository.save(createIrrigationLogsDTO)
  // }
  //
  // async update(id:number,updateIrrigationLogsDTO:UpdateIrrigationLogsDTO) {
  //   const result=await this.sensorRepository.update(id, updateIrrigationLogsDTO)
  //   return this.sensorRepository.findOneBy({ id });
  // }


}
