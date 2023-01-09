import express from 'express';
import productRoutes from '../src/handlers/products_routes';
import userRoutes from '../src/handlers/users_routes';
import orderRoutes from '../src/handlers/orders_routes';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', async (_req, res) => {
  res.send('Welcome to the store front Api');
});

productRoutes(app);
userRoutes(app);
orderRoutes(app);

app.listen(port, () => {
  console.log(` listening on port ${port}`);
});

export default app;
