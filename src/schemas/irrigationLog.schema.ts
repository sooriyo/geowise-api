import {
  BaseEntity,
  Column, CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn, UpdateDateColumn,
} from 'typeorm'
import { Actuator } from './actuator.schema';

@Entity('tbl_irrigation_log')
export class IrrigationLog extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  startTime: Date;

  @UpdateDateColumn()
  endTime: Date;

  @ManyToOne(() => Actuator, actuator => actuator.irrigationLogs)
  actuator: Actuator;
}
