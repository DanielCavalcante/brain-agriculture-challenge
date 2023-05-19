import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
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

  @Column({ name: 'name', nullable: true })
  name?: string;

  @OneToMany(() => Address, (address) => address.city)
  @JoinColumn({ name: 'address_id' })
  address?: Address[];

  @ManyToOne(() => State, (state) => state.uf, { eager: true })
  @JoinColumn({ name: 'uf' })
  uf?: State;
}
