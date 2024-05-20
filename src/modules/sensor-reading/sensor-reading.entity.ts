class SensorReadingEntity{
  temperature:number;
  humidity:number;
  soilMoisture:number;
  lightIntensity :number;
  sensorId:number;
}
export class CreateSensorReadingDTO extends SensorReadingEntity{}
export class UpdateSensorReadingDTO extends SensorReadingEntity{}