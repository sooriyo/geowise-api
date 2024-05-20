class SensorEntity{
  name :string;
  sensorId:string
  type:string;
  isActive:boolean;
  polytunnelId:number
}
export class CreateSensorDTO extends SensorEntity{}
export class UpdateSensorDTO extends SensorEntity{}

export class SensorData {
  name :string;
  value:number
}