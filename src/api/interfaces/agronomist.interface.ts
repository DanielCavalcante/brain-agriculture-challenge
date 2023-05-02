export interface IState {
  id?: number;
  ufCode?: number;
  name: string;
  uf: string;
  region?: string;
  cities?: ICity[];
}

export interface ICity {
  id?: number;
  code?: number;
  name: string;
  address?: IAddress;
  uf: IState;
}

export interface IAddress {
  id?: number;
  street: string;
  postalCode: string;
  neighborhood?: string;
  complement?: string;
  city?: ICity;
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
