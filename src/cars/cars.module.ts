import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cars } from './entities/cars.entity';
import { Clients } from '../clients/entities/clients.entity';
import { ClientsService } from '../clients/clients.service';
import { ClientsModule } from '../clients/clients.module';

@Module({
  imports: [TypeOrmModule.forFeature([Cars, Clients]), ClientsModule],
  controllers: [CarsController],
  providers: [CarsService],
})
export class CarsModule {}
