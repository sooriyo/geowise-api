import { Actuator } from '../../schemas/actuator.schema';
import { CreateActuatorDTO, UpdateActuatorDTO } from './actuator.entity';
import { Repository } from 'typeorm';
export declare class ActuatorService {
    private actuatorRepository;
    constructor(actuatorRepository: Repository<Actuator>);
    findAll(): Promise<Actuator[]>;
    find(id: number): Promise<Actuator>;
    create(createActuatorDTO: CreateActuatorDTO): Promise<CreateActuatorDTO & Actuator>;
    update(id: number, updateActuatorDTO: UpdateActuatorDTO): Promise<Actuator>;
}
