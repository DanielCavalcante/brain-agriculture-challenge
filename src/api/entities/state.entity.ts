import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm';
import { City } from './city.entity';

@Entity('states')
export class State {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'uf_code' })
  ufCode?: number;

  @Column()
  name: string;

  @Column()
  uf: string;

  @Column()
  region?: string;

  @ManyToOne(() => City)
  city?: City[];
}
