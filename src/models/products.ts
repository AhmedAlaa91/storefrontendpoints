import Client from '../database';

export type product = {
  id?: Number;
  name: string;
  price: number;
  category?: string;
};

export class products {
  async resetSeq(): Promise<string> {
    try {
      const conn = await Client.connect();
      const sql =
        'ALTER SEQUENCE products_id_seq RESTART; delete from products;';
      await conn.query(sql);
      conn.release();
      return 'seq reset';
    } catch (err) {
      throw new Error(`cannot get products ${err}`);
    }
  }

  async index(): Promise<product[]> {
    try {
      const conn = await Client.connect();
      const sql = 'select * from products';
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`cannot get products ${err}`);
    }
  }

  async show(id: string): Promise<product[]> {
    try {
      const conn = await Client.connect();

      const sql = `SELECT * FROM  products where id=${id}`;

      const result = await conn.query(sql);

      conn.release();
      console.log(id);

      return result.rows;
    } catch (err) {
      throw new Error(`Could not find product ${id}. Error: ${err}`);
    }
  }

  async create(p: product): Promise<product> {
    try {
      const conn = await Client.connect();
      const sql = `INSERT INTO products (name, price, category ) VALUES('${p.name}', ${p.price}, '${p.category}') RETURNING *`;
      const result = await conn.query(sql);
      console.log(sql);

      const product = result.rows[0];

      conn.release();

      return product;
    } catch (err) {
      throw new Error(`Could not add new product ${p.name}. Error: ${err}`);
    }
  }
}
