import express, { Request, Response } from 'express';

import { product, products } from '../models/products';

import jwt from 'jsonwebtoken';

const prod = new products();

const index = async (_req: Request, res: Response) => {
  const prodResults = await prod.index();
  res.json(prodResults);
};

const show = async (req: Request, res: Response) => {
  const prodResult = await prod.show(req.body.id);
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
    const product: product = {
      name: req.body.name,
      price: req.body.price,
      category: req.body.category
    };

    const newProd = await prod.create(product);
    res.json(newProd);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const productRoutes = (app: express.Application) => {
  app.get('/products', index);
  app.get('/products/:id', show);
  app.post('/products', create);
};

export default productRoutes;
