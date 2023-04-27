import { Address } from '../entities/address.entity';
import { Agronomist } from '../entities/agronomist.entity';
import { IAddress, IAgronomist } from '../interfaces/agronomist.interface';

export class AgronomistHelper {
  public agronomistBuilder(agronomist: IAgronomist): Agronomist {
    const data: Agronomist = {
      fullname: agronomist.fullname,
      cpfCnpj: agronomist.cpfCnpj
    };
    return data;
  }

  public addressBuilder(address: IAddress, agronomist: Agronomist): Address {
    const data: Address = {
      street: address.street,
      postalCode: address.postalCode,
      neighborhood: address.neighborhood,
      complement: address.complement,
      city: address.city,
      uf: address.uf,
      country: address.country,
      agronomist: agronomist
    };

    return data;
  }
}
