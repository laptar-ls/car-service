import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Employees } from './entities/employees.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employees)
    private readonly employeeRepository: Repository<Employees>,
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto): Promise<Employees> {
    const employee = new Employees();
    employee.firstName = createEmployeeDto.firstName;
    employee.lastName = createEmployeeDto.lastName;
    employee.email = createEmployeeDto.email;
    employee.password = createEmployeeDto.password;
    return await employee.save();
  }

  async findByEmail(email: string): Promise<Employees | any> {
    return Employees.findOne({ where: { email } });
  }

  async findAll() {
    return await this.employeeRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} employee`;
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return `This action updates a #${id} employee`;
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
