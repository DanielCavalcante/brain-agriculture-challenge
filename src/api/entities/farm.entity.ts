import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  ManyToOne,
  ManyToMany,
  JoinTable
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
  totalAreaHectare?: string;

  @Column({ name: 'arable_area' })
  arableArea: string;

  @Column({ name: 'vegetation_area' })
  vegetationArea: string;

  @ManyToMany(() => PlantedCrop, (plantedCrop) => plantedCrop.farm)
  @JoinTable({ name: 'planted_crop' })
  plantedCrop: PlantedCrop[];
}
