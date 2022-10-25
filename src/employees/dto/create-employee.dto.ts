import {IsDate, IsEmail, IsNotEmpty, IsNumber, IsString, Length} from 'class-validator';

export class CreateEmployeeDto {
    @IsNotEmpty({message: 'Заповніть email'})
    @IsEmail()
    email: string
    @IsNotEmpty({message: 'Заповніть password'})
    @Length(3,8)
    @IsString()
    password: string
    @IsNotEmpty({message: 'Заповніть firstName'})
    @IsString()
    firstName: string
    @IsNotEmpty({message: 'Заповніть lastName'})
    @IsString()
    lastName: string

}
