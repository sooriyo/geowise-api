import { Injectable } from '@nestjs/common'
import { User } from '../../schemas/user.schema'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { CreateUserDTO, UpdateUserDTO } from './user.entity'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async findAll() {
    return await this.userRepository.find()
  }

  async find(id:number) {
    return await this.userRepository.findOneBy({ id })
  }

  async create(createUserDTO:CreateUserDTO) {
    return await this.userRepository.save(createUserDTO)
  }

  async update(id:number,updateUserDTO:UpdateUserDTO) {
    const result=await this.userRepository.update(id, updateUserDTO)
    return this.userRepository.findOneBy({ id });
  }


}
