import { Repository } from 'typeorm';
import { Sensor } from '../../schemas/sensor.schema';
import { CreateSensorDTO, UpdateSensorDTO } from './sensor.entity';
export declare class SensorService {
    private sensorRepository;
    constructor(sensorRepository: Repository<Sensor>);
    findAll(): Promise<Sensor[]>;
    find(id: number): Promise<Sensor>;
    create(createSensorDTO: CreateSensorDTO): Promise<CreateSensorDTO & Sensor>;
    update(id: number, updateSensorDTO: UpdateSensorDTO): Promise<Sensor>;
}
