import { Model, Table, DataType, Column, PrimaryKey, AutoIncrement, AllowNull, BelongsTo, ForeignKey, BelongsToMany } from 'sequelize-typescript';
import User from './user.model';

@Table({
  tableName: 'userprofile',
  timestamps: true,
})

export default class UserProfile extends Model<UserProfile> {
  @PrimaryKey
  @AllowNull(false)
  @AutoIncrement
  @Column({
    type: DataType.INTEGER
  })
  Id: number;

  @AllowNull(false)
  @Column({
    type: DataType.STRING(100)
  })
  bio: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING(100)
  })
  profile_pic: string;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User
}