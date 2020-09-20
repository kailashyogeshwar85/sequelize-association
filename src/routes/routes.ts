import { Application, Request, Response } from "express";
import teamRoutes from './team.routes';
import playerRoutes from './player.routes';
import bookRoutes from './book.routes';
import authorRoutes from './author.routes';
import publisherRoutes from './publisher.routes';
import userRoutes from '../routes/user.routes';
import userProfileRoutes from '../routes/userprofile.routes';

module.exports = (app: Application) => {
  app.get("/", (req: Request, res: Response) => {
    res.send("Welcome!!");
  });

  app.use('/teams', teamRoutes);
  app.use('/players', playerRoutes);
  app.use('/books', bookRoutes);
  app.use('/authors', authorRoutes);
  app.use('/publisher', publisherRoutes);
  app.use('/users', userRoutes);
  app.use('/profiles', userProfileRoutes);
};
