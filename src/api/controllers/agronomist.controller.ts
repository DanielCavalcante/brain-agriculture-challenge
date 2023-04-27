import { Controller, Get, Post, Param, Body, HttpStatus } from '@nestjs/common';
import { AgronomistService } from '../services/agronomist.service';
import { IAgronomist } from '../interfaces/agronomist.interface';
import { AgronomistDTO } from '../dtos/agronomist.dto';

@Controller('v1/agronomists')
export class AgronomistController {
  constructor(private readonly service: AgronomistService) {}

  @Get(':id')
  async findById(@Param('id') id) {
    try {
      return await this.service.findById(id);
    } catch (error) {
      return HttpStatus.BAD_REQUEST;
    }
  }

  @Get('')
  async findAll() {
    try {
      return await this.service.findAll();
    } catch (error) {
      return HttpStatus.BAD_REQUEST;
    }
  }

  @Post('')
  async create(@Body() body: AgronomistDTO) {
    try {
      return await this.service.create(body);
    } catch (e) {
      return HttpStatus.BAD_REQUEST;
    }
  }
}
