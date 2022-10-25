import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clients } from './entities/clients.entity';
import { Cars } from '../cars/entities/cars.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Clients, Cars])],
  controllers: [ClientsController],
  providers: [ClientsService],
})
export class ClientsModule {}
