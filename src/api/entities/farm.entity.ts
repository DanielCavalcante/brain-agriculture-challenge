import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  ManyToOne,
  ManyToMany
} from 'typeorm';
import { Address } from './address.entity';
import { Agronomist } from './agronomist.entity';
import { PlantedCrop } from './planted-crop.entity';

@Entity('farms')
export class Farm {
  @PrimaryGeneratedColumn()
  id?: number;

  @ManyToOne(() => Agronomist, (agronomist) => agronomist.farms)
  agronomist?: Agronomist;

  @OneToOne(() => Address)
  address?: Address;

  @Column()
  name: string;

  @Column({ name: 'total_area_hectare' })
  totalAreaHectare: number;

  @Column({ name: 'arable_area' })
  arableArea: number;

  @Column({ name: 'vegetation_area' })
  vegetationArea: number;

  @ManyToMany(() => PlantedCrop, (plantedCrop) => plantedCrop.farm)
  plantedCrops?: PlantedCrop[];
}
