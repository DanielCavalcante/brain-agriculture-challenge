import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany
} from 'typeorm';
import { Agronomist } from './agronomist.entity';
import { Farm } from './farm.entity';
import { City } from './city.entity';

@Entity('adresses')
export class Address {
  @PrimaryGeneratedColumn()
  id?: number;

  @ManyToOne(() => Agronomist, (agronomist) => agronomist.address)
  @JoinColumn({ name: 'agronomist_id' })
  agronomist?: Agronomist;

  @OneToMany(() => Farm, (farm) => farm.address)
  farm?: Farm;

  @Column({ nullable: false })
  street: string;

  @Column({ nullable: false, name: 'postal_code' })
  postalCode: string;

  @Column()
  neighborhood?: string;

  @Column()
  complement?: string;

  @ManyToOne(() => City, (city) => city.address, { eager: true })
  @JoinColumn({ name: 'city_id' })
  city?: City;
}
