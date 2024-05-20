import { User } from '../../schemas/user.schema';
import { Repository } from 'typeorm';
import { CreateUserDTO, UpdateUserDTO } from './user.entity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findAll(): Promise<User[]>;
    find(id: number): Promise<User>;
    create(createUserDTO: CreateUserDTO): Promise<CreateUserDTO & User>;
    update(id: number, updateUserDTO: UpdateUserDTO): Promise<User>;
}
