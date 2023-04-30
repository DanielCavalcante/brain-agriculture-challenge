import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  HttpStatus,
  Delete,
  Put,
  Res
} from '@nestjs/common';
import { AgronomistService } from '../services/agronomist.service';
import { AgronomistDTO } from '../dtos/agronomist.dto';
import { Response } from 'express';

@Controller('v1/agronomists')
export class AgronomistController {
  constructor(private readonly service: AgronomistService) {}

  @Get('/:id')
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
  async create(@Res() response: Response, @Body() body: AgronomistDTO) {
    try {
      const agronomist = await this.service.create(body);
      response.status(HttpStatus.CREATED).send(agronomist);
    } catch (e) {
      return HttpStatus.BAD_REQUEST;
    }
  }

  @Delete('/:id')
  async delete(@Param('id') id) {
    try {
      return await this.service.delete(id);
    } catch (e) {
      return HttpStatus.NOT_FOUND;
    }
  }

  @Put('/:id')
  async update(@Param('id') id, @Body() body: AgronomistDTO) {
    try {
      const response = await this.service.update(id, body);
      return response;
    } catch (error) {
      return HttpStatus.NOT_FOUND;
    }
  }
}
