import {
  BaseEntity,
  Column, CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { Crop } from './crop.schema';

@Entity('tbl_fertilizer_schedule')
export class FertilizerSchedule extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @CreateDateColumn()
  startDate: Date;

  @Column()
  details: string;

  @ManyToOne(() => Crop, crop => crop.fertilizerSchedules)
  crop: Crop;
}
