import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Cluster } from '../clusters/cluster.model';

@Table({ timestamps: false, tableName: 'Card' })
export class Card extends Model {
  @Column({ primaryKey: true })
  id!: number;

  @ForeignKey(() => Cluster)
  @Column
  clusterName!: string;

  @BelongsTo(() => Cluster)
  cluster!: Cluster;
}
