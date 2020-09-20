import Book from '../database/models/book.model';
import Author from '../database/models/author.model';


export default class AuthorService {
  getAuthor() {
    return Author.findAll({
      include: [
        {
          model: Book,
          through: { attributes: [] }
        }
      ]
    })
  }
}