import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class AgronomistDTO {
  @IsNotEmpty()
  @IsString()
  @MinLength(10)
  fullname: string;

  @IsNotEmpty()
  @MinLength(11)
  @MaxLength(13)
  cpfCnpj: string;
}
