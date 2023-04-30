export interface IAddress {
  id?: number;
  street: string;
  postalCode: string;
  neighborhood?: string;
  complement?: string;
  city: string;
  uf: string;
  country: string;
}

export interface IFarm {
  id?: number;
  agronomist?: IAgronomist;
  address?: IAddress;
  name: string;
  totalAreaHectare: number;
  arableArea: number;
  vegetationArea: number;
  plantedCrop?: IPlantedCrops;
}

export enum IPlantedCrops {
  SOYA = 'Soja',
  CORN = 'Milho',
  COTTON = 'Algodão',
  COFFEE = 'Café',
  SUGAR_CANE = 'Cana de Açucar'
}

export interface IAgronomist {
  id?: number;
  cpfCnpj: string;
  fullname: string;
  address?: IAddress;
  farms?: IFarm[];
}
