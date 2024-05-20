import {
  BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn,
} from 'typeorm'
import { Actuator } from './actuator.schema'


@Entity('tbl_actuator_command')
export class Actuator_command extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  command:string

  @CreateDateColumn()
  createdAt:Date

  @OneToMany(() => Actuator, actuator => actuator.actuator_command)
  actuators: Actuator[];

}
