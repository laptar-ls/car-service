import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  Matches,
} from 'class-validator';

export class CreateEmployeeDto {
  @IsNotEmpty({ message: 'Заповніть firstName' })
  @IsString()
  firstName: string;

  @IsNotEmpty({ message: 'Заповніть lastName' })
  @IsString()
  lastName: string;

  @IsNotEmpty({ message: 'Заповніть email' })
  @IsEmail()
  email: string;

  @IsNotEmpty({ message: 'Заповніть password' })
  @Length(3, 8)
  @Matches(/^(?=.*?[a-z])(?=.*?[0-9]).{3,}$/)
  password: string;

  @IsNotEmpty()
  @Length(3, 8)
  @Matches(/^(?=.*?[a-z])(?=.*?[0-9]).{3,}$/)
  confirm: string;
}
