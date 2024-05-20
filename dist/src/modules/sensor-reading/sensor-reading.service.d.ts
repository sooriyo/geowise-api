import { SensorReading } from '../../schemas/sensorReading.schema';
import { CreateSensorReadingDTO, UpdateSensorReadingDTO } from './sensor-reading.entity';
import { Repository } from 'typeorm';
export declare class SensorReadingService {
    private sensorReadingRepository;
    constructor(sensorReadingRepository: Repository<SensorReading>);
    findAll(): Promise<SensorReading[]>;
    find(id: number): Promise<SensorReading>;
    create(createSensorReadingDTO: CreateSensorReadingDTO): Promise<CreateSensorReadingDTO & SensorReading>;
    update(id: number, updateSensorReadingDTO: UpdateSensorReadingDTO): Promise<SensorReading>;
}
