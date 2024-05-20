import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Polytunnel } from './polytunnel.schema';
import { SensorReading } from './sensorReading.schema'


@Entity('tbl_sensor')
export class Sensor extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  sensorId: string;

  @Column()
  type: string;

  @Column()
  isActive: boolean;

  @ManyToOne(() => Polytunnel, polytunnel => polytunnel.sensors)
  polytunnel: Polytunnel;

  @OneToMany(() => SensorReading, sensorReading => sensorReading.sensor)
  sensorReadings: SensorReading[];
}
