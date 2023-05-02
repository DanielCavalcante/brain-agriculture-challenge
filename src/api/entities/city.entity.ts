import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
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
  readonly code?: number;

  @Column({ name: 'name' })
  readonly name: string;

  @OneToOne(() => City, (city) => city.address, {
    cascade: false
  })
  address?: Address;

  @OneToMany(() => State, (state) => state.uf, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'uf' })
  readonly uf: State;
}
