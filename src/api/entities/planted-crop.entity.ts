import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { PlantedCropsEnum } from '../interfaces/agronomist.interface';

@Entity('planted_crops')
export class PlantedCrop {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: 'enum', enum: PlantedCropsEnum })
  name: PlantedCropsEnum;
}
