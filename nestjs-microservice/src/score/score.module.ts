import { Module } from '@nestjs/common';
import { ScoreService } from './score.service';
import { ScoreController } from './score.controller';
import { ScoreRepository } from './score-repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ScoreRepository])],
  controllers: [ScoreController],
  providers: [ScoreService],
})
export class ScoreModule {}
