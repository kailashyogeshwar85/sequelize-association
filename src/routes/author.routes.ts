import { Router } from 'express';
import AuthorController from '../controllers/author.controller';

const router = Router();
const authorController = new AuthorController();

router.get('/list', authorController.getAuthors);

export default router;
