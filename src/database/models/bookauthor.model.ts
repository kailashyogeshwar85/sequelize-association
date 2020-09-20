import { Model, Table, Column, ForeignKey } from 'sequelize-typescript';
import Book from './book.model';
import Author from './author.model';

@Table({
  tableName: 'bookauthor',
  timestamps: true,
})

// junction table that will serve as glue between books & authors table
// book -> bookauthor -> author

export default class BookAuthor extends Model<BookAuthor> {
  @ForeignKey(() => Book)
  @Column
  bookId: number;

  @ForeignKey(() => Author)
  @Column
  authorId: number;
}