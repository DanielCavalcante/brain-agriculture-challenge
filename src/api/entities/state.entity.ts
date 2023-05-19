import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { City } from './city.entity';
@Entity('states')
export class State {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @Column()
  uf?: string;

  @OneToMany(() => City, (city) => city.uf)
  cities?: City[];
}
