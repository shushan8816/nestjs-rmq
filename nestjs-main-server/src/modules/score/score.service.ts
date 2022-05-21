import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateScoreDto } from './dto/create-score.dto';

@Injectable()
export class ScoreService {
  constructor(@Inject('SCORE_SERVICE') private client: ClientProxy) {}

  createScore(createScoreDto: CreateScoreDto) {
    return this.client.send('create-score', createScoreDto);
  }
  getSingleScore(id: string) {
    return this.client.send('get-all-scores', id);
  }
  deleteScore(id: string) {
    return this.client.send('delete-score', id);
  }
}
