import {
  BelongsTo,
  Column,
  CreatedAt,
  DeletedAt,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Card } from '../cards/card.model';

@Table({ updatedAt: false, tableName: 'CheckIn' })
export class CheckIn extends Model {
  @Column({ primaryKey: true })
  userName!: string;

  @ForeignKey(() => Card)
  @Column({ unique: true })
  cardId!: number;

  @BelongsTo(() => Card)
  card!: Card;

  @CreatedAt
  checkedInAt!: Date;

  @DeletedAt
  checkedOutAt!: Date;
}
