import { AbstractEntity } from '../entity/abstract.entity';

export class AbstractDto {
  id: string;

  createdAt: Date;

  updatedAt: Date;

  constructor(entity: AbstractEntity, options?: { excludeFields?: boolean }) {
    if (!options?.excludeFields) {
      this.id = entity.id;
      this.createdAt = entity.createdAt;
      this.updatedAt = entity.updatedAt;
    }
  }
}
