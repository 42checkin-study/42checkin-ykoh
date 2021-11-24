import { Column, Model, Table } from 'sequelize-typescript';

@Table({ createdAt: false, updatedAt: false })
export class Cluster extends Model {
  @Column({ primaryKey: true })
  name!: string;

  @Column
  max!: number;
}
