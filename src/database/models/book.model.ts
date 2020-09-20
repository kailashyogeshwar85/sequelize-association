import { Model, Table, DataType, Column, PrimaryKey, AutoIncrement, AllowNull, BelongsToMany } from 'sequelize-typescript';
import Author from './author.model';
import BookAuthor from './bookauthor.model';

@Table({
  tableName: 'books',
  timestamps: true,
})

export default class Book extends Model<Book> {
  @PrimaryKey
  @AllowNull(false)
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
  })
  Id: number;

  @AllowNull(false)
  @Column({
    type: DataType.STRING(100),
  })
  title: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING(50),
  })
  Genre: string;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
  })
  Height: number;

  @AllowNull(false)
  @Column({
    type: DataType.STRING(50),
  })
  Publisher: string;

  // book belongs to many author through BookAuthor
  @BelongsToMany(() => Author,  () => BookAuthor) // many to many
  authors: Author[]
}