import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
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

  @Column({ nullable: true })
  uf?: string;

  @Column()
  region?: string;

  @OneToMany(() => City, (city) => city.uf)
  cities?: City[];
}
