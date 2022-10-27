import { Injectable } from '@nestjs/common';
import { CreatePartDto } from './dto/create-part.dto';
import { UpdatePartDto } from './dto/update-part.dto';
import { Repository } from 'typeorm';
import { Parts } from './entities/parts.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PartsService {
  constructor(
    @InjectRepository(Parts)
    private readonly partRepository: Repository<Parts>,
  ) {}

  async create(createPartDto: CreatePartDto) {
    return await this.partRepository.save(createPartDto);
  }

  async findAll() {
    return await this.partRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} part`;
  }

  update(id: number, updatePartDto: UpdatePartDto) {
    return `This action updates a #${id} part`;
  }

  remove(id: number) {
    return `This action removes a #${id} part`;
  }
}
