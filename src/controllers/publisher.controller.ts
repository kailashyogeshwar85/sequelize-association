import PublisherService from '../services/publisher.service';
import {Request, Response } from 'express';

const publisherService = new PublisherService();


export default class PublisherController {
  async getPublishers(req: Request, res: Response) {
    const result = await publisherService.getPublisher();
    res.send(result);
  }
}