import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { EmployeesService } from '../employees/employees.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private employeeService: EmployeesService,
    private jwtService: JwtService,
  ) {}

  async validateEmployeeCred(email: string, password: string): Promise<any> {
    const employee = await this.employeeService.findByEmail(email);
    if (!employee) throw new BadRequestException();

    if (!(await bcrypt.compare(password, employee.password)))
      throw new UnauthorizedException();
    return employee;
  }

  generateToken(employee: any) {
    return {
      access_token: this.jwtService.sign({
        name: employee.email,
        sub: employee.id,
      }),
    };
  }
}
