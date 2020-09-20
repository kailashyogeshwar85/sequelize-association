import { Model, Table, DataType, Column, PrimaryKey, AutoIncrement, AllowNull, BelongsTo, ForeignKey } from 'sequelize-typescript';


@Table({
  tableName: 'publisher',
  timestamps: true,
})

export default class Publisher extends Model<Publisher> {
  @PrimaryKey
  @AllowNull(false)
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
  })
  Id: number

  @AllowNull(false)
  @Column({
    type: DataType.STRING(50),
    field: 'publisher_name',
  })
  publisherName: string
}