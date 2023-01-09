import Client from '../database';

export type order = {
  id: Number;
  prod_id: Number;
  user_id: Number;
  quantity: Number;
  status: string;
};

export class orders {
  async index(): Promise<order[]> {
    try {
      const conn = await Client.connect();
      const sql = 'select * from orders';
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`cannot get orders ${err}`);
    }
  }

  async showActive(userId: number): Promise<order[]> {
    try {
      const conn = await Client.connect();

      const sql = `select orders.id ,orders.quantity , products.name , orders.status ,users.firstName
        from orders
        inner join products on orders.prod_id = products.id
        inner join users on orders.user_id = users.id
        where orders.user_id= ${userId} and orders.status='active'`;

      const result = await conn.query(sql);

      conn.release();

      return result.rows;
    } catch (err) {
      throw new Error(`Could not find order ${userId}. Error: ${err}`);
    }
  }

  async showComplete(userId: number): Promise<order[]> {
    try {
      const conn = await Client.connect();

      const sql = `select orders.id ,orders.quantity , products.name , orders.status ,users.firstName
        from orders
        inner join products on orders.prod_id = products.id
        inner join users on orders.user_id = users.id
        where orders.user_id= ${userId} and orders.status='complete'`;

      const result = await conn.query(sql);

      conn.release();

      return result.rows;
    } catch (err) {
      throw new Error(`Could not find order ${userId}. Error: ${err}`);
    }
  }
}
