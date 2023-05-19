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
import { RegionService } from '../services/region.service';

@Controller('v1/regions')
export class RegionController {
  constructor(private readonly service: RegionService) {}

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
  async create(@Res() response: Response, @Body() citiesDto: any[]) {
    try {
      const regions = await this.service.create(citiesDto);
      response.status(HttpStatus.CREATED).send(regions);
    } catch (e) {
      return HttpStatus.BAD_REQUEST;
    }
  }
}
