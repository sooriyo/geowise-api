import {
  BaseEntity,
  Column, CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { User } from './user.schema';

@Entity('tbl_notification')
export class NotificationSchema extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

 @CreateDateColumn()
  timestamp: Date;

  @Column()
  parameter: string;

  @Column()
  thresholdValue: number;

  @Column()
  status: string;

  @ManyToOne(() => User, user => user.notifications)
  user: User;
}
