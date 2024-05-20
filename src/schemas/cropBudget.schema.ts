import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Crop } from './crop.schema';

@Entity('tbl_crop_budget')
export class CropBudget extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  totalCost: number;

  @Column()
  expectedRevenue: number;

  @Column()
  expectedProfit: number;

  @ManyToOne(() => Crop, crop => crop.cropBudgets)
  crop: Crop;
}
