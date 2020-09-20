import { Router } from 'express';
import PublisherController from '../controllers/publisher.controller';

const publiserController = new PublisherController();
const router = Router();

router.get('/list', publiserController.getPublishers);

export default router;