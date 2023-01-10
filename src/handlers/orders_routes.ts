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






const orderRoutes = (app: express.Application) => {
  app.get('/orders', index);

};

export default orderRoutes;
