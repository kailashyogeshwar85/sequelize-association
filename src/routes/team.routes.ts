import { Router } from 'express';
import TeamController from '../controllers/team.controller';

const router = Router();
const teamController = new TeamController();

router.get('/list', teamController.getPlayer);

export default router;
