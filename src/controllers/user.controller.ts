import { Request, Response } from 'express';
import UserService from '../services/user.service';

const userService = new UserService();

export default class AuthorController {
  async getAuthors(req: Request, res: Response) {
    let result = await userService.getUsers();
    res.send(result);
  }
}