import express, { Request, Response } from 'express';

import { order, orders } from '../models/orders';

import jwt from 'jsonwebtoken';

const o = new orders();

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

  const prodResults = await o.index();
  res.json(prodResults);
};

const showActive = async (req: Request, res: Response) => {
  let userId;
  try {
    const authorizationHeader = req.headers.authorization!;
    const token = authorizationHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET!) as JwtPayload;

    interface JwtPayload {
      usr: {
        id: number;
      };
    }

    userId = decoded.usr.id;
    console.log(userId);
  } catch (err) {
    res.status(401);
    res.json('invalid token');
    return;
  }

  const prodResult = await o.showActive(userId);
  res.json(prodResult);
};

const showComplete = async (req: Request, res: Response) => {
  let userId;
  try {
    const authorizationHeader = req.headers.authorization!;
    const token = authorizationHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET!) as JwtPayload;

    interface JwtPayload {
      usr: {
        id: number;
      };
    }

    userId = decoded.usr.id;
    console.log(userId);
  } catch (err) {
    res.status(401);
    res.json('invalid token');
    return;
  }

  const prodResult = await o.showComplete(userId);
  res.json(prodResult);
};

const orderRoutes = (app: express.Application) => {
  app.get('/orders', index);
  app.get('/currentorders/', showActive);
  app.get('/completeorders/', showComplete);
};

export default orderRoutes;
