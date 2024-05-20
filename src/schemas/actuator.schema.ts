import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Polytunnel } from './polytunnel.schema'
import { IrrigationLog } from './irrigationLog.schema'
import { Actuator_command } from './actuator_command.schema'

@Entity('tbl_actuator')
export class Actuator extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  actuatorId: string;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  isActive: boolean;

  @Column()
  controlCommand: string;

  @ManyToOne(() => Polytunnel, polytunnel => polytunnel.actuators)
  polytunnel: Polytunnel;

  @OneToMany(() => IrrigationLog, irrigationLog => irrigationLog.actuator)
  irrigationLogs: IrrigationLog[];

  @OneToMany(() => Actuator_command, actuator_command => actuator_command.actuators)
  actuator_command: Actuator_command[];
}
