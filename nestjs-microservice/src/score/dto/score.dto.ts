import { ScoreEntity } from '../entities/score.entity';
import { AbstractDto } from '../../common/dto/abstract.dto';

export class ScoreDto extends AbstractDto {
  content?: string;

  constructor(scoreEntity: ScoreEntity) {
    super(scoreEntity);
    this.content = scoreEntity.content;
  }
}
