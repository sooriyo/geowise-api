import {
  BaseEntity,
  Column, CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { Sensor } from './sensor.schema';

@Entity('tbl_sensor_reading')
export class SensorReading extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  timestamp: Date;

  @Column()
  temperature: number;

  @Column()
  humidity: number;

  @Column()
  soilMoisture: number;


  @Column()
  lightIntensity: number;

  @ManyToOne(() => Sensor, sensor => sensor.sensorReadings)
  sensor: Sensor;
}
