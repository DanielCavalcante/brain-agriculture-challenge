import { IsArray, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class RegionDTO {
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  uf: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  ufName: string;

  @IsNotEmpty()
  @IsArray()
  cities: string[];
}
