import express, { Request, Response } from 'express';

import { user, users } from '../models/users';

import jwt from 'jsonwebtoken';

const u = new users();

const index = async (req: Request, res: Response) => {
  try {
    const authorizationHeader = req.headers.authorization!;
    const token = authorizationHeader.split(' ')[1];
    jwt.verify(token, process.env.TOKEN_SECRET!);
  } catch (err) {
    res.status(401);
    res.json('invalid token');
    return;
  }

  const prodResults = await u.index();
  res.json(prodResults);
};

const show = async (req: Request, res: Response) => {
  let userId
  try {
    const authorizationHeader = req.headers.authorization!;
    console.log (authorizationHeader)
    const token = authorizationHeader.split(' ')[1];
    jwt.verify(token, process.env.TOKEN_SECRET!);

    
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET!) as JwtPayload;

    interface JwtPayload {
      usr: {
        id: number;
      };
    }
    userId = decoded.usr.id;

  } catch (err) {
    res.status(401);
    res.json('invalid token');
    return;
  }

  const prodResult = await u.show(userId);
  res.json(prodResult);
};

const create = async (req: Request, res: Response) => {
 
  try {
    const authorizationHeader = req.headers.authorization!;
    const token = authorizationHeader.split(' ')[1];
    jwt.verify(token, process.env.TOKEN_SECRET!);

  } catch (err) {
    res.status(401);
    res.json('invalid token');
    return;
  }

  try {
    const usr: user = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      pwd: req.body.pwd
    };

    const newUser = await u.create(usr);
    let token = jwt.sign({ usr: newUser }, process.env.TOKEN_SECRET!);
    res.json(token);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const login = async (req: Request, res: Response) => {

  try {
    const userloged = await u.authenticate(req.body.firstname, req.body.pwd);
    let token = jwt.sign({ usr: userloged }, process.env.TOKEN_SECRET!);
    res.json(token);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const userRoutes = (app: express.Application) => {
  app.get('/users', index);
  app.get('/users/:id', show);
  app.post('/users', create);
  app.post('/login', login);
};

export default userRoutes;
