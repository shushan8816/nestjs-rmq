import { Injectable, NotFoundException } from '@nestjs/common';
import { ScoreRepository } from './score-repository';
import { ScoreEntity } from './entities/score.entity';
import { CreateScoreDto } from './dto/create-score.dto';

@Injectable()
export class ScoreService {
  constructor(private scoreRepository: ScoreRepository) {}

  async create(score: CreateScoreDto): Promise<ScoreEntity> {
    const newScore = this.scoreRepository.create(score);
    await this.scoreRepository.save(newScore);
    return newScore;
  }

  async getById(id: string): Promise<ScoreEntity> {
    const scoreEntity = await this.scoreRepository
      .createQueryBuilder('score')
      .where('score.id = :id', { id })
      .getOne();

    if (!scoreEntity) throw new NotFoundException();

    return scoreEntity;
  }

  async delete(id: string) {
    const scoreEntity = await this.scoreRepository
      .createQueryBuilder('score')
      .where('score.id = :id', { id })
      .getOne();

    if (!scoreEntity) throw new NotFoundException();

    await this.scoreRepository.remove(scoreEntity);

    return scoreEntity;
  }
}
