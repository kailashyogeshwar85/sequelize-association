import { Model, Table, DataType, Column, PrimaryKey, AutoIncrement, AllowNull, HasMany } from 'sequelize-typescript';
import Player from './player.model';

@Table({
  tableName: 'team',
  timestamps: true,
})

export default class Team extends Model<Team> {

  @PrimaryKey
  @AllowNull(false)
  @AutoIncrement
  @Column({
    type: DataType.INTEGER
  })
  Id: number;

  @AllowNull(false)
  @Column({
    type: DataType.STRING(50)
  })
  name: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING(100)
  })
  logo: string;

  @HasMany(() => Player)
  players: Player[];
}