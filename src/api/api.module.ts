import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Agronomist } from './entities/agronomist.entity';
import { Farm } from './entities/farm.entity';
import { Address } from './entities/address.entity';
import { AgronomistService } from './services/agronomist.service';
import { AgronomistController } from './controllers/agronomist.controller';
import { AgronomistHelper } from './helpers/agronomist.helper';

@Module({
  imports: [TypeOrmModule.forFeature([Agronomist, Farm, Address])],
  providers: [AgronomistService, AgronomistHelper],
  controllers: [AgronomistController]
})
export class ApiModule {}
