import { Router } from 'express';
import BookController from '../controllers/book.controller';

const router = Router();
const bookController = new BookController();

router.get('/list', bookController.getBooks);

export default router;
