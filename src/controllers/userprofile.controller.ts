import { Request, Response } from 'express';
import UserProfileService from '../services/userprofile.service';

const userprofileService = new UserProfileService();

export default class UserProfileController {
  async getProfiles(req: Request, res: Response) {
    let result = await userprofileService.getProfiles();
    res.send(result);
  }
}