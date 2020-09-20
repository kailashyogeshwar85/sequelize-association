import BookService from '../services/book.service';

import { Request, Response } from 'express';

const bookService = new BookService();

export default class BookController {
  async getBooks(req: Request, res: Response) {
    let result = await bookService.getBooks();
    res.send(result);
  }
}