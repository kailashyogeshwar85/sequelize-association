import AuthorService from '../services/author.service';
import { Request, Response } from 'express';

const authorService = new AuthorService();

export default class AuthorController {
  async getAuthors(req: Request, res: Response) {
    let result = await authorService.getAuthor();
    res.send(result);
  }
}