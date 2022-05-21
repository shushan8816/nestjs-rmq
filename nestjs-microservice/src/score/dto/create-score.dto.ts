import { IsNotEmpty, IsString } from 'class-validator';

export class CreateScoreDto {
  @IsString()
  @IsNotEmpty()
  content: string;
}
