import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,

} from 'typeorm';
import { Polytunnel } from './polytunnel.schema'
import { NotificationSchema } from './notification.schema'


@Entity('tbl_user')
export class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userProfile: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  address: string;

  @Column()
  password: string;

  @OneToMany(() => Polytunnel, polytunnel => polytunnel.user)
  polytunnels: Polytunnel[];

  @OneToMany(() => NotificationSchema, notification => notification.user)
  notifications: NotificationSchema[];
}
