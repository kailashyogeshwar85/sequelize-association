import { Model, Table, DataType, Column, PrimaryKey, AutoIncrement, AllowNull, BelongsTo, ForeignKey, BelongsToMany } from 'sequelize-typescript';
import Book from './book.model';
import BookAuthor from './bookauthor.model';

@Table({
  tableName: 'authors',
  timestamps: true,
})

export default class Author extends Model<Author> {
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

  // author belongs to many book through BookAuthor
  @BelongsToMany(() => Book, () => BookAuthor) // many to many n:m
  books: Array<Book & { BookAuthor: BookAuthor}>
}