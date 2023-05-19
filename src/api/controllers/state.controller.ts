import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  HttpStatus,
  Res
} from '@nestjs/common';
import { Response } from 'express';
import { StateService } from '../services/state.service';

@Controller('v1/states')
export class StateController {
  constructor(private readonly service: StateService) {}

  @Get('/:id')
  async findById(@Param('id') id) {
    try {
      return await this.service.findById(id);
    } catch (error) {
      return HttpStatus.BAD_REQUEST;
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.service.findAll();
    } catch (error) {
      return HttpStatus.BAD_REQUEST;
    }
  }

  @Post()
  async create(@Res() response: Response, @Body() statesDto: any) {
    try {
      const states = await this.service.create(statesDto);
      response.status(HttpStatus.CREATED).send(states);
    } catch (e) {
      return HttpStatus.BAD_REQUEST;
    }
  }
}
