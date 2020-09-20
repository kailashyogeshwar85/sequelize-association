import { Router } from 'express';
import PlayerController from '../controllers/player.controller';

const router = Router();
const playerController = new PlayerController();

router.get('/list', playerController.getPlayer);

export default router;
