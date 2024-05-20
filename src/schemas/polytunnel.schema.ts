import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.schema';
import { Crop } from './crop.schema';
import { Sensor } from './sensor.schema';
import { Actuator } from './actuator.schema';

@Entity('tbl_polytunnel')
export class Polytunnel extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  location: string;

  @Column()
  area: number;

  @ManyToOne(() => User, user => user.polytunnels)
  user: User;

  @OneToMany(() => Crop, crop => crop.polytunnel)
  crops: Crop[];

  @OneToMany(() => Sensor, sensor => sensor.polytunnel)
  sensors: Sensor[];

  @OneToMany(() => Actuator, actuator => actuator.polytunnel)
  actuators: Actuator[];
}
