import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { City } from '../entities/city.entity';
import { RegionDTO } from '../dtos/region.dto';
import { State } from '../entities/state.entity';

@Injectable()
export class RegionService {
  constructor(
    @InjectRepository(City)
    private readonly repository: Repository<City>,
    @InjectRepository(State)
    private readonly stateRepository: Repository<State>
  ) {}

  async findById(stringId: string): Promise<City> {
    try {
      const id = Number(stringId);
      const city = await this.repository.findOne({
        where: { id }
      });
      return city;
    } catch (e) {
      console.log(e);
    }
  }

  async findAll(): Promise<any> {
    try {
      const cities = await this.repository.find({});
      return cities;
    } catch (e) {
      console.log(e);
    }
  }

  async create(
    regionsDTO: RegionDTO[]
  ): Promise<{ state: State; cities: City[] } | any> {
    try {
      const response = await Promise.all(
        regionsDTO.map(async (region): Promise<City | any> => {
          const state = await this.stateRepository.save({
            uf: region.uf,
            name: region.ufName
          });

          for (let city of region.cities) {
            const response = { name: city, uf: state };
            await this.repository.save(response);
          }
        })
      );
      return response;
    } catch (e) {
      console.log(e);
    }
  }
}
