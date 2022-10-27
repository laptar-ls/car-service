import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePartDto {
  @IsNotEmpty()
  @IsString()
  partName: string;

  @IsNotEmpty()
  @IsNumber()
  partPrice: number;
}
