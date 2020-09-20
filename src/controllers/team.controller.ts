import TeamService from '../services/team.service';
import { Request, Response } from 'express';

const teamService = new TeamService();

export default class TeamController {
  async getPlayer(req: Request, res: Response) {
    let result = await teamService.getTeam();
    res.send(result);
  }
}