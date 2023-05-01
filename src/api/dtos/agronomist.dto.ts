import { IsNotEmpty, IsString, Matches, MinLength } from 'class-validator';

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
}
