import Client from '../database';

export type order = {
  id: Number;
  user_id: Number;
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


  async create(): Promise<order[]> {
    try {
      const conn = await Client.connect();
      const sql_seq ='ALTER SEQUENCE orders_id_seq RESTART; delete from orders;';
      await conn.query(sql_seq);
      const sql = `insert into orders (user_id,status) values (1,'active') RETURNING * `;
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`cannot get orders ${err}`);
    }
  }



 
}
