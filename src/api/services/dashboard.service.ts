import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class DashBoardService {
  constructor(@InjectDataSource() private readonly dataSource: DataSource) {}

  async getInfos(uf: string): Promise<any> {
    try {
      const response = await this.dataSource.query(`
        select 
            sum(total_area_hectare) as total_area, 
            sum(arable_area) as arable_area, 
            sum(vegetation_area) as vegetation_area 
        from farms 
            inner join adresses a on a.id = farms.address_id 
            inner join cities c on c.id = a.city_id 
            inner join states s on s.id = c.uf 
        where s.uf = '${uf}'
      `);
      return response;
    } catch (e) {
      console.log(e);
    }
  }
}
