declare class ActuatorEntity {
    name: string;
    type: string;
    isActive: boolean;
    controlCommand: string;
    polytunnelId: number;
}
export declare class CreateActuatorDTO extends ActuatorEntity {
}
export declare class UpdateActuatorDTO extends ActuatorEntity {
}
export {};
