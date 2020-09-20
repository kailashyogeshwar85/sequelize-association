import { Request, Response, NextFunction } from "express";

export default class UserMiddleware {
  isAuthenticated(req: Request, res: Response, next: NextFunction) {
    next();
    // return res.status(400).json({
    //   reason: "user not authenticated",
    // });
  }
}
