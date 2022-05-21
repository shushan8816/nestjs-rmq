import { Controller, Body, Param } from '@nestjs/common';
import { ScoreService } from './score.service';
import { CreateScoreDto } from './dto/create-score.dto';
import { ScoreEntity } from './entities/score.entity';
import { MessagePattern } from '@nestjs/microservices';

@Controller('score')
export class ScoreController {
  constructor(private readonly scoreService: ScoreService) {}

  @MessagePattern('create-score')
  createScore(@Body() createScoreDto: CreateScoreDto): Promise<ScoreEntity> {
    return this.scoreService.create(createScoreDto);
  }

  @MessagePattern('get-one-score')
  getScoreById(@Param('id') id: string) {
    return this.scoreService.getById(id);
  }

  @MessagePattern('delete-score')
  deleteScore(@Param('id') id: string) {
    return this.scoreService.delete(id);
  }
}
