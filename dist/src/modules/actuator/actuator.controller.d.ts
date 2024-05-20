import { ActuatorService } from './actuator.service';
import { CreateActuatorDTO, UpdateActuatorDTO } from './actuator.entity';
import { Actuator } from '../../schemas/actuator.schema';
export declare class ActuatorController {
    private readonly actuatorService;
    constructor(actuatorService: ActuatorService);
    findAll(): Promise<Actuator[]>;
    findOne(id: number): Promise<Actuator>;
    create(createActuatorDTO: CreateActuatorDTO): Promise<CreateActuatorDTO & Actuator>;
    update(id: number, updateActuatorDTO: UpdateActuatorDTO): Promise<Actuator>;
}
