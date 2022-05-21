import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '../../../common/entity/abstract.entity';
import { ScoreDto } from '../dto/score.dto';

@Entity({ name: 'scores' })
export class ScoreEntity extends AbstractEntity<ScoreDto> {
  @Column()
  content: string;
}
