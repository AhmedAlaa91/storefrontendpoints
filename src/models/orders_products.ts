import Client from '../database';

export type OrderProduct = {
    id: number;
    quantity: number;
    order_id: number;
    product_id: number;
};


export class OrderProducts {

  async create(): Promise<OrderProducts[]> {
    try {
      const conn = await Client.connect();
      const sql_seq ='ALTER SEQUENCE orders_products_id_seq RESTART; delete from orders_products;';
      await conn.query(sql_seq);
      const sql = 'insert into orders_products (quantity,order_id,prod_id) values (15,1,1) RETURNING (quantity,order_id,prod_id) ';
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`cannot get orders ${err}`);
    }
  }
  

  
    async showActive(userId: number): Promise<OrderProduct[]> {
      try {
        const conn = await Client.connect();
  
        const sql = `select orders_products.quantity ,products.name , orders.status , users.firstname
        from orders_products 
        inner join products on orders_products.prod_id=products.id
        inner join orders on orders_products.order_id=orders.id
        left join users on users.id = orders.user_id
        where orders.user_id=${userId} and orders.status='active'`;
  
        const result = await conn.query(sql);
  
        conn.release();
  
        return result.rows;
      } catch (err) {
        throw new Error(`Could not find order ${userId}. Error: ${err}`);
      }
    }
  
}
  