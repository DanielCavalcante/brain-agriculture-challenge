import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { State } from '../entities/state.entity';
import { IState } from '../interfaces/agronomist.interface';

@Injectable()
export class StateService {
  constructor(
    @InjectRepository(State)
    private readonly repository: Repository<State>
  ) {}

  async findById(stringId: string): Promise<State> {
    try {
      const id = Number(stringId);
      const state = await this.repository.findOne({
        where: { id }
      });
      return state;
    } catch (e) {
      console.log(e);
    }
  }

  async findByUf(uf: string): Promise<State> {
    try {
      const state = await this.repository.findOne({
        where: { uf }
      });
      return state;
    } catch (e) {
      console.log(e);
    }
  }

  async findAll(): Promise<any> {
    try {
      const states = await this.repository.find({});
      return states;
    } catch (e) {
      console.log(e);
    }
  }

  async create(states: IState[]): Promise<State[] | any> {
    try {
      const response = await this.repository.save(states);
      return response;
    } catch (e) {
      console.log(e);
    }
  }
}
