import Book from '../database/models/book.model';
import Author from '../database/models/author.model';

export default class BookService {
  getBooks() {
    return Book.findAll(
      {
        include: [{
          model: Author,
          through: { attributes: [] }
        }]
     },
    )
  }
}