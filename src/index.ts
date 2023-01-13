import express from 'express';
require("dotenv").config();
import productRoutes from '././handlers/products_routes';
import userRoutes from '././handlers/users_routes';
import orderRoutes from '././handlers/orders_routes';
import orderproductsRoutes from '././handlers/orders_products_routes';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', async (_req, res) => {
  res.send('Welcome to the store front Api');
});

productRoutes(app);
userRoutes(app);
orderRoutes(app);
orderproductsRoutes(app);

app.listen(port, () => {
  console.log(` listening on port ${port}`);
});

export default app;
