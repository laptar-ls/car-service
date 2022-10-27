import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { EmployeesModule } from '../employees/employees.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [EmployeesModule, PassportModule],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
