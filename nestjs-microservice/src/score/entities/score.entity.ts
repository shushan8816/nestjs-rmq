import { Column, Entity } from 'typeorm';
import { ScoreDto } from '../dto/score.dto';
import { AbstractEntity } from '../../common/entity/abstract.entity';

@Entity({ name: 'scores' })
export class ScoreEntity extends AbstractEntity<ScoreDto> {
  @Column()
  content: string;
}
