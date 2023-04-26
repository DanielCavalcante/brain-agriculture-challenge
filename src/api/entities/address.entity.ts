import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne
} from 'typeorm';
import { Agronomist } from './agronomist.entity';
import { Farm } from './farm.entity';

@Entity('adresses')
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Agronomist, (agronomist) => agronomist.address)
  agronomist: Agronomist;

  @OneToOne(() => Farm, (farm) => farm.address)
  farm: Farm;

  @Column({ nullable: false })
  street: string;

  @Column({ nullable: false, name: 'postal_code' })
  postalCode: string;

  @Column({ nullable: true })
  neighborhood: string;

  @Column({ nullable: true })
  complement: string;

  @Column({ nullable: false })
  city: string;

  @Column({ nullable: false })
  uf: string;

  @Column({ nullable: false })
  country: string;
}
