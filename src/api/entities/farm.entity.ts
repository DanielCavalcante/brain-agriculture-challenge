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
  id: number;

  @ManyToOne(() => Agronomist, (agronomist) => agronomist.farm)
  agronomist: Agronomist[];

  @OneToOne(() => Address)
  address: Address;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: true, name: 'total_area_hectare' })
  totalAreaHectare: string;

  @Column({ nullable: true, name: 'arable_area' })
  arableArea: string;

  @Column({ nullable: true, name: 'vegetation_area' })
  vegetationArea: string;

  @ManyToMany(() => PlantedCrop, (plantedCrop) => plantedCrop.farm)
  @JoinTable()
  plantedCrop: PlantedCrop[];
}
