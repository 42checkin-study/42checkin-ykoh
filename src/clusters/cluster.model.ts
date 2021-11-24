import { Column, Model, Table } from 'sequelize-typescript';

@Table({ timestamps: false, tableName: 'Cluster' })
export class Cluster extends Model {
  @Column({ primaryKey: true })
  name!: string;

  @Column
  max!: number;
}
