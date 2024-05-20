import { UserService } from './user.service';
import { CreateUserDTO, UpdateUserDTO } from './user.entity';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    find(id: number): Promise<import("../../schemas/user.schema").User>;
    create(createUserDTO: CreateUserDTO): Promise<CreateUserDTO & import("../../schemas/user.schema").User>;
    update(id: number, updateUserDTO: UpdateUserDTO): Promise<import("../../schemas/user.schema").User>;
    findAll(): Promise<import("../../schemas/user.schema").User[]>;
}
