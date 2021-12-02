import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class CreateCheckInDto {
  @IsNumber()
  @Type(() => Number)
  cardId!: number;
}
