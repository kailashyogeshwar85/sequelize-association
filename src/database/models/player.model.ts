import { Model, Table, DataType, Column, PrimaryKey, AutoIncrement, AllowNull, BelongsTo, ForeignKey } from 'sequelize-typescript';
import Team from './team.model';


@Table({
  tableName: 'player',
  timestamps: true,
})

export default class Player extends Model<Player> {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
  })
  Id: number;

  @AllowNull(false)
  @Column({
    type: DataType.STRING(50)
  })
  first_name: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING(50)
  })
  last_name: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING(50)
  })
  email: string;

  @ForeignKey(() => Team)
  @Column
  teamId: number;

  @BelongsTo(() => Team)
  team: Team;
}
