import Publisher from '../database/models/publisher.model';

export default class PublisherService {
  async getPublisher() {
    return Publisher.findOne({});
  }
}