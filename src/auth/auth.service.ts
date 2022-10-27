import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { EmployeesService } from '../employees/employees.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private employeeService: EmployeesService) {}

  async validateEmployeeCred(email: string, password: string): Promise<any> {
    const employee = await this.employeeService.findByEmail(email);
    if (!employee) throw new BadRequestException();

    if (!(await bcrypt.compare(password, employee.password)))
      throw new UnauthorizedException();
    return employee;
  }
}
