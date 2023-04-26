import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Agronomist } from './entities/agronomist.entity';
import { Farm } from './entities/farm.entity';
import { Address } from './entities/address.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Agronomist, Farm, Address])],
  providers: [],
  controllers: []
})
export class ApiModule {}
