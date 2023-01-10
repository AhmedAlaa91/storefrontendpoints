import express, { Request, Response } from 'express';

import { OrderProduct, OrderProducts } from '../models/orders_products';

import jwt from 'jsonwebtoken';

const o = new OrderProducts();

const create = async (req: Request, res: Response) => {
  let userId;
  try {
    const authorizationHeader = req.headers.authorization!;
    const token = authorizationHeader.split(' ')[1];
  


  } catch (err) {
    res.status(401);
    res.json('invalid token');
    return;
  }
  const prodResult = await o.create();
  res.json(prodResult);
}

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



const orderproductsRoutes = (app: express.Application) => {
  app.post('/addorder/', create);
  app.get('/currentorders/', showActive);

};

export default orderproductsRoutes;
