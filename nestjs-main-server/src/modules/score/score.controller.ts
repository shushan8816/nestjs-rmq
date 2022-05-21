import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { ScoreService } from './score.service';
import { CreateScoreDto } from './dto/create-score.dto';

@Controller('score')
export class ScoreController {
  constructor(private scoreService: ScoreService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createScoreDto: CreateScoreDto) {
    return this.scoreService.createScore(createScoreDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  getById(@Param('id') id: string) {
    return this.scoreService.getSingleScore(id);
  }

  @Delete()
  delete(@Param('id') id: string) {
    return this.scoreService.deleteScore(id);
  }
}
