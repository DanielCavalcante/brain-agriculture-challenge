import { Controller, Get, Param, HttpStatus } from '@nestjs/common';
import { DashBoardService } from '../services/dashboard.service';

@Controller('v1/dashboard-info')
export class DashBoardController {
  constructor(private readonly service: DashBoardService) {}

  @Get('/:uf')
  async generateInfos(@Param('uf') uf) {
    try {
      return await this.service.getInfos(uf);
    } catch (error) {
      return HttpStatus.BAD_REQUEST;
    }
  }
}
