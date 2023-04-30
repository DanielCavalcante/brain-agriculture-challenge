import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn
} from 'typeorm';
import { Farm } from './farm.entity';
import { Address } from './address.entity';

@Entity('agronomists')
export class Agronomist {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ nullable: false, name: 'cpf_cnpj', unique: true })
  cpfCnpj: string;

  @Column({ nullable: false })
  fullname: string;

  @OneToMany(() => Address, (adress) => adress.agronomist)
  @JoinColumn({ name: 'address_id' })
  address?: Address[];

  @OneToMany(() => Farm, (farms) => farms.agronomist, {
    persistence: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  @JoinColumn({ name: 'farm_id' })
  farms?: Farm[];
}
