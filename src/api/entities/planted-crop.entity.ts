import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable
} from 'typeorm';
import { Farm } from './farm.entity';
import { IPlantedCrops } from '../interfaces/agronomist.interface';

@Entity('planted_crops')
export class PlantedCrop {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => Farm, (farm) => farm.plantedCrops)
  @JoinTable()
  farm: Farm[];

  @Column({ type: 'enum', enum: IPlantedCrops })
  name: string;
}
