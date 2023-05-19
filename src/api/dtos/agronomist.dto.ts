import {
  IsArray,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength
} from 'class-validator';
import { IAddress, IFarm } from '../interfaces/agronomist.interface';

const cpfAndCnpjRegex =
  /(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)/;

export class AgronomistDTO {
  @IsNotEmpty()
  @IsString()
  @MinLength(10)
  fullname: string;

  @IsNotEmpty()
  @IsString()
  @Matches(cpfAndCnpjRegex)
  cpfCnpj: string;

  @IsArray()
  address: IAddress[];

  @IsArray()
  farms: IFarm[];
}
