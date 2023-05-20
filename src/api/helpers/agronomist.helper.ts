import { Address } from '../entities/address.entity';
import { Agronomist } from '../entities/agronomist.entity';
import { City } from '../entities/city.entity';
import { Farm } from '../entities/farm.entity';
import { PlantedCrop } from '../entities/planted-crop.entity';
import {
  IAddress,
  IAgronomist,
  IFarm
} from '../interfaces/agronomist.interface';

export class AgronomistHelper {
  public agronomistBuilder(agronomist: IAgronomist): Agronomist {
    const data: Agronomist = {
      fullname: agronomist.fullname,
      cpfCnpj: agronomist.cpfCnpj
    };
    return data;
  }

  public addressBuilder(
    address: Address,
    agronomist: Agronomist,
    city: City
  ): Address {
    const data: Address = {
      street: address.street,
      postalCode: address.postalCode,
      neighborhood: address.neighborhood,
      complement: address.complement,
      city: city,
      agronomist: agronomist?.id ? agronomist : undefined
    };

    return data;
  }

  public farmBuilder(
    farm: IFarm,
    agronomist: Agronomist,
    address?: Address,
    city?: City,
    plantedCrops?: PlantedCrop[]
  ): Farm {
    console.log(city);
    const data: Farm = {
      name: farm.name,
      totalAreaHectare: farm.totalAreaHectare,
      arableArea: farm.arableArea,
      vegetationArea: farm.vegetationArea,
      agronomist: agronomist,
      address: address.street
        ? this.addressBuilder(address, null, city)
        : undefined,
      plantedCrops: plantedCrops
    };
    return data;
  }

  public farmPlantedCrops() {}
}
