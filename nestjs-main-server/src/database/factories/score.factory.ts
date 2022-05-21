import { define } from 'typeorm-seeding';
import { ScoreEntity } from '../../modules/score/entity/score.entity';

define(ScoreEntity, () => {
  const id = 'scoreId';

  const score = new ScoreEntity();
  score.id = id;
  return score;
});
