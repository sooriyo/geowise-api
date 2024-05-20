declare class SensorReadingEntity {
    temperature: number;
    humidity: number;
    soilMoisture: number;
    lightIntensity: number;
    sensorId: number;
}
export declare class CreateSensorReadingDTO extends SensorReadingEntity {
}
export declare class UpdateSensorReadingDTO extends SensorReadingEntity {
}
export {};
