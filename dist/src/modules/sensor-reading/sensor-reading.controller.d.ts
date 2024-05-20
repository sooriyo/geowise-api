import { SensorReadingService } from './sensor-reading.service';
import { CreateSensorReadingDTO, UpdateSensorReadingDTO } from './sensor-reading.entity';
export declare class SensorReadingController {
    private readonly sensorReadingService;
    constructor(sensorReadingService: SensorReadingService);
    findAll(): Promise<import("../../schemas/sensorReading.schema").SensorReading[]>;
    find(id: number): Promise<import("../../schemas/sensorReading.schema").SensorReading>;
    create(createSensorReadingDTO: CreateSensorReadingDTO): Promise<CreateSensorReadingDTO & import("../../schemas/sensorReading.schema").SensorReading>;
    update(id: number, updateSensorReadingDTO: UpdateSensorReadingDTO): Promise<import("../../schemas/sensorReading.schema").SensorReading>;
}
