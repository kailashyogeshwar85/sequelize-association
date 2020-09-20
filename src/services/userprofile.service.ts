import User from '../database/models/user.model';
import UserProfile from '../database/models/userprofile.model';

export default class UserService {
  getProfiles() {
    return UserProfile.findAll({
      include: [User]
    })
  }
}