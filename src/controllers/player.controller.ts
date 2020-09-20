import PlayerService from '../services/player.service';
import { Request, Response } from 'express';

const playerService = new PlayerService();

export default class TeamController {
  async getPlayer(req: Request, res: Response) {
    let result = await playerService.getPlayer();
    res.send(result);
  }
}