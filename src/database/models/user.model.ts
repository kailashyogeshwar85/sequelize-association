import { HasOne, Model, Table, DataType, Column, PrimaryKey, AutoIncrement, AllowNull, ForeignKey } from 'sequelize-typescript';
import UserProfile from './userprofile.model';

@Table({
  tableName: 'users',
  timestamps: true,
})

export default class User extends Model<User> {
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
  first_name: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING(50)
  })
  email: string;

  @HasOne(() => UserProfile)
  profile: UserProfile
}