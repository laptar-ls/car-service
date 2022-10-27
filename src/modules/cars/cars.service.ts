import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cars } from './entities/cars.entity';
import { Clients } from '../clients/entities/clients.entity';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Cars)
    private readonly carRepository: Repository<Cars>,
    @InjectRepository(Clients)
    private clientRepository: Repository<Clients>,
  ) {}

  async create(createCarDto: CreateCarDto, owner: Clients) {
    const newCar = await this.carRepository.save(createCarDto);
    owner.cars = [newCar, ...owner.cars];
    await this.clientRepository.save(owner);
    return newCar;
  }

  findAll() {
    return `This action returns all cars`;
  }

  async findOne(id: number) {
    return await this.carRepository.findOneBy({ id: id });
  }

  update(id: number, updateCarDto: UpdateCarDto) {
    return `This action updates a #${id} car`;
  }

  remove(id: number) {
    return `This action removes a #${id} car`;
  }
}
