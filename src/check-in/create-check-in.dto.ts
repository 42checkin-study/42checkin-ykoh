import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class createCheckInDto {
  @IsNumber()
  @Type(() => Number)
  cardId!: number;
}
