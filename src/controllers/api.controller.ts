import { Application, Request, Response } from "express"

export const loadApiEndpoints = (app: Application): void => {
  app.get("/", (req: Request, res: Response) => {
    return res.status(200).send('Status OK!');
  });
};