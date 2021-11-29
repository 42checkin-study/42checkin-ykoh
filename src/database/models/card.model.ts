import {
  BelongsTo,
  Column,
  ForeignKey,
  HasOne,
  Model,
  Table,
} from 'sequelize-typescript';
import { CheckIn } from './checkIn.model';
import { Cluster } from './cluster.model';

@Table({ timestamps: false, tableName: 'Card' })
export class Card extends Model {
  @Column({ primaryKey: true })
  id!: number;

  @ForeignKey(() => Cluster)
  @Column
  clusterName!: string;

  @BelongsTo(() => Cluster)
  cluster!: Cluster;

  @HasOne(() => CheckIn)
  CheckIn!: CheckIn;
}
