import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { Card } from '../cards/card.model';

@Table({ timestamps: false, tableName: 'Cluster' })
export class Cluster extends Model {
  @Column({ primaryKey: true })
  name!: string;

  @Column
  max!: number;

  @HasMany(() => Card)
  cards: Card[];
}
