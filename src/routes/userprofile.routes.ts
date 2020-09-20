import { Router } from 'express';
import UserProfileController from '../controllers/userprofile.controller';

const router = Router();
const userProfileController = new UserProfileController();

router.get('/list', userProfileController.getProfiles);

export default router;