import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cars } from './entities/cars.entity';
import { Clients } from '../clients/entities/clients.entity';
import { ClientsService } from '../clients/clients.service';

@Module({
  imports: [TypeOrmModule.forFeature([Cars, Clients])],
  controllers: [CarsController],
  providers: [CarsService, ClientsService],
})
export class CarsModule {}
