declare class SensorEntity {
    name: string;
    sensorId: string;
    type: string;
    isActive: boolean;
    polytunnelId: number;
}
export declare class CreateSensorDTO extends SensorEntity {
}
export declare class UpdateSensorDTO extends SensorEntity {
}
export declare class SensorData {
    name: string;
    value: number;
}
export {};
