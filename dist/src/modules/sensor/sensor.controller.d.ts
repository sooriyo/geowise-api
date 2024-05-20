import { SensorService } from './sensor.service';
import { CreateSensorDTO, SensorData, UpdateSensorDTO } from './sensor.entity';
import { MqttService } from '../mqtt/mqtt.service';
export declare class SensorController {
    private readonly sensorService;
    private readonly mqttService;
    constructor(sensorService: SensorService, mqttService: MqttService);
    sendData(data: SensorData): string;
    find(id: number): Promise<import("../../schemas/sensor.schema").Sensor>;
    create(createSensorDTO: CreateSensorDTO): Promise<CreateSensorDTO & import("../../schemas/sensor.schema").Sensor>;
    update(id: number, updateSensorDTO: UpdateSensorDTO): Promise<import("../../schemas/sensor.schema").Sensor>;
    findAll(): Promise<import("../../schemas/sensor.schema").Sensor[]>;
}
