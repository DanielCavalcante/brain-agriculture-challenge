import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Agronomist } from '../entities/agronomist.entity';
import { IAgronomist } from '../interfaces/agronomist.interface';
import { AgronomistHelper } from '../helpers/agronomist.helper';
import { Address } from '../entities/address.entity';

@Injectable()
export class AgronomistService {
  constructor(
    @InjectRepository(Agronomist)
    private readonly repository: Repository<Agronomist>,
    @InjectRepository(Address)
    private readonly addressRepository: Repository<Address>,
    private readonly helper: AgronomistHelper
  ) {
    this.helper = new AgronomistHelper();
  }

  async findById(stringId: string): Promise<Agronomist> {
    const id = Number(stringId);
    return await this.repository.findOne({
      where: { id },
      relations: ['address']
    });
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
      return agronomist;
    } catch (e) {
      console.log(e);
    }
  }
}
