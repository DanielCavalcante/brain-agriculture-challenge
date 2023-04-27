import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
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
  address?: Address[];

  @OneToMany(() => Farm, (farms) => farms.agronomist)
  farms?: Farm[];
}
