import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Agronomist } from '../entities/agronomist.entity';
import { IAgronomist, IFarm } from '../interfaces/agronomist.interface';
import { AgronomistHelper } from '../helpers/agronomist.helper';
import { Address } from '../entities/address.entity';
import { Farm } from '../entities/farm.entity';

@Injectable()
export class AgronomistService {
  constructor(
    @InjectRepository(Agronomist)
    private readonly repository: Repository<Agronomist>,
    @InjectRepository(Address)
    private readonly addressRepository: Repository<Address>,
    @InjectRepository(Farm)
    private readonly farmRepository: Repository<Farm>,
    private readonly helper: AgronomistHelper
  ) {
    this.helper = new AgronomistHelper();
  }

  async findById(stringId: string): Promise<Agronomist> {
    const id = Number(stringId);
    const agronomist = await this.repository.findOne({
      where: { id },
      relations: ['address', 'farms']
    });
    return agronomist;
  }

  async findAll(): Promise<any> {
    const agronomists = await this.repository.find({});
    return agronomists;
  }

  async create(agronomistInterface: IAgronomist): Promise<Agronomist> {
    try {
      const data = this.helper.agronomistBuilder(agronomistInterface);
      let agronomist = await this.repository.save(data);

      if (agronomist?.id && agronomistInterface?.address.street) {
        let address = this.helper.addressBuilder(
          agronomistInterface?.address,
          agronomist
        );

        const addressSaved: Address = await this.addressRepository.save(
          address
        );

        if (!addressSaved) 'Erro try create address.';
      }
      if (agronomist?.id && agronomistInterface?.farms) {
        agronomistInterface.farms.map(async (farm: IFarm) => {
          if (farm.name) {
            const sumAreas = farm?.vegetationArea + farm?.arableArea;
            if (sumAreas <= farm.totalAreaHectare) {
              const data = this.helper.farmBuilder(farm, agronomist);
              const farmToSave = await this.farmRepository.save(data);
              if (farmToSave.id) agronomist.farms.push(farmToSave);
            }
          }
        });
      }

      return agronomist;
    } catch (e) {
      console.log(e);
    }
  }

  async delete(stringId: string): Promise<any> {
    try {
      const id = Number(stringId);
      const response = await this.repository.delete(id);
      return response;
    } catch (e) {
      console.log(e);
    }
  }

  async update(
    stringId: string,
    agronomistInterface: IAgronomist
  ): Promise<any> {
    try {
      const id = Number(stringId);
      const data = this.helper.agronomistBuilder(agronomistInterface);
      const agronomist = await this.repository.update(id, data);
      return agronomist;
    } catch (e) {
      console.log(e);
    }
  }
}
