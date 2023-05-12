import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToOne
} from 'typeorm';
import { Agronomist } from './agronomist.entity';
import { Farm } from './farm.entity';
import { City } from './city.entity';

@Entity('adresses')
export class Address {
  @PrimaryGeneratedColumn()
  id?: number;

  @ManyToOne(() => Agronomist, (agronomist) => agronomist.address, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  @JoinColumn({ name: 'agronomist_id' })
  agronomist?: Agronomist;

  @OneToOne(() => Farm, (farm) => farm.address)
  farm?: Farm;

  @Column({ nullable: false })
  street: string;

  @Column({ nullable: false, name: 'postal_code' })
  postalCode: string;

  @Column()
  neighborhood?: string;

  @Column()
  complement?: string;

  @OneToOne(() => City, (city) => city.address, {
    eager: true,
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'city_id' })
  city?: City;
}
