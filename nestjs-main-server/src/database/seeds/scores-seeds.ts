import type { Factory, Seeder } from 'typeorm-seeding';
import { ScoreEntity } from '../../modules/score/entity/score.entity';

export default class CreateScores implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(ScoreEntity)().create();
  }
}
