import {Router} from 'express';
import UserController from '../controllers/user.controller';

const router = Router();
const userController = new UserController();


router.get('/list', userController.getAuthors);

export default router;