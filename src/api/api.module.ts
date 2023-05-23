import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Agronomist } from './entities/agronomist.entity';
import { Farm } from './entities/farm.entity';
import { Address } from './entities/address.entity';
import { AgronomistService } from './services/agronomist.service';
import { AgronomistController } from './controllers/agronomist.controller';
import { AgronomistHelper } from './helpers/agronomist.helper';
import { PlantedCrop } from './entities/planted-crop.entity';
import { City } from './entities/city.entity';
import { State } from './entities/state.entity';
import { StateService } from './services/state.service';
import { StateController } from './controllers/state.controller';
import { RegionService } from './services/region.service';
import { RegionController } from './controllers/region.controller';
import { DashBoardService } from './services/dashboard.service';
import { DashBoardController } from './controllers/dashboard.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Agronomist,
      Farm,
      City,
      Address,
      PlantedCrop,
      State
    ])
  ],
  providers: [
    AgronomistService,
    AgronomistHelper,
    StateService,
    RegionService,
    DashBoardService
  ],
  controllers: [
    AgronomistController,
    StateController,
    RegionController,
    DashBoardController
  ]
})
export class ApiModule {}
