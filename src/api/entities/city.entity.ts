import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm';
import { State } from './state.entity';
import { Address } from './address.entity';

@Entity('cities')
export class City {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  code?: number;

  @Column({ name: 'name' })
  name: string;

  @OneToOne(() => City, (city) => city.address, {
    cascade: false
  })
  address?: Address;

  @ManyToOne(() => State, (state) => state.uf)
  @JoinColumn({ name: 'uf' })
  uf?: State;
}
