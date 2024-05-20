import {
  BaseEntity,
  Column, CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn, UpdateDateColumn,
} from 'typeorm'
import { Polytunnel } from './polytunnel.schema';
import { CropBudget } from './cropBudget.schema'
import { FertilizerSchedule } from './fertilizerShedule.schema'


@Entity('tbl_crop')
export class Crop extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  variety: string;

  @CreateDateColumn()
  plantDate: Date;

  @UpdateDateColumn()
  cropeAmount: Number;

  @ManyToOne(() => Polytunnel, polytunnel => polytunnel.crops)
  polytunnel: Polytunnel;

  @OneToMany(() => CropBudget, cropBudget => cropBudget.crop)
  cropBudgets: CropBudget[];

  @OneToMany(() => FertilizerSchedule, fertilizerSchedule => fertilizerSchedule.crop)
  fertilizerSchedules: FertilizerSchedule[];
}
