import { Application, Request, Response } from "express"
import UserRepository from '../shared/infrastructure/repository/user.repository'

export const loadUserEndpoints = (app: Application): void => {
    const repository = new UserRepository()

    app.get('/users', async (req: Request, res: Response) => {
        const users = await repository.getAll()
        res.send(users);
    });
  };