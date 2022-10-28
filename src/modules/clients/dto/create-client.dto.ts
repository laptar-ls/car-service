import { IsMobilePhone, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateClientDto {
  @ApiProperty({
    example: 'Taras',
    description: 'Name of the client',
  })
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @ApiProperty({
    example: 'Lapytskyi',
    description: "The client's last name",
  })
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @ApiProperty({
    example: '0676761316',
    description: 'Client phone number',
  })
  @IsNotEmpty()
  @IsMobilePhone()
  phone: string;
}
