import {IsMobilePhone, IsNotEmpty, IsString} from 'class-validator';

export class CreateClientDto {
    @IsNotEmpty()
    @IsString()
    firstName: string

    @IsNotEmpty()
    @IsString()
    lastName: string

    @IsNotEmpty( )
    @IsMobilePhone()
    phone: string
}
