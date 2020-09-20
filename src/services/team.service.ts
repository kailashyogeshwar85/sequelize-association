import Team from '../database/models/team.model';
import Player from '../database/models/player.model';


export default class TeamService {
  getTeam() {
    return Team.findOne({ include: [Player] })
  }
}