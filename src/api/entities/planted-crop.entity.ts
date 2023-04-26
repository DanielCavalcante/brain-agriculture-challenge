import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable
} from 'typeorm';
import { Farm } from './farm.entity';
import IPlantedCrops from '../interfaces/planted-crops.interface';

@Entity('planted_crop')
export class PlantedCrop {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => Farm, (farm) => farm.plantedCrop)
  @JoinTable()
  farm: Farm[];

  @Column({ nullable: false })
  name: IPlantedCrops;
}
