import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  ManyToOne,
  ManyToMany,
  JoinColumn,
  JoinTable,
  OneToMany
} from 'typeorm';
import { Address } from './address.entity';
import { Agronomist } from './agronomist.entity';
import { PlantedCrop } from './planted-crop.entity';

@Entity('farms')
export class Farm {
  @PrimaryGeneratedColumn()
  id?: number;

  @ManyToOne(() => Agronomist, (agronomist) => agronomist.farms)
  @JoinColumn({ name: 'agronomist_id' })
  agronomist?: Agronomist;

  @OneToMany(() => Address, (address) => address.farm)
  @JoinColumn({ name: 'address_id' })
  address?: Address;

  @Column()
  name: string;

  @Column({ name: 'total_area_hectare' })
  totalAreaHectare: number;

  @Column({ name: 'arable_area' })
  arableArea: number;

  @Column({ name: 'vegetation_area' })
  vegetationArea: number;

  @ManyToMany(() => PlantedCrop)
  @JoinTable()
  plantedCrops?: PlantedCrop[];
}
