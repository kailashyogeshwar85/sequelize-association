import Team from '../database/models/team.model';
import Player from '../database/models/player.model';


export default class PlayerService {
  getPlayer() {
    return Player.findAll({ include: [Team] })
  }
}