import Client from '../database';
import bcrypt from 'bcrypt';

export type user = {
  id?: Number;
  firstname: string;
  lastname: string;
  pwd: string;
};

const pepper = process.env.BYCRYPT_PASSWORD;
const saltRounds = '' + process.env.SALT_ROUNDS;

export class users {
  async resetSeq(): Promise<string> {
    try {
      const conn = await Client.connect();
      const sql = 'ALTER SEQUENCE users_id_seq RESTART; delete from users;';
      await conn.query(sql);
      conn.release();
      return 'seq reset';
    } catch (err) {
      throw new Error(`cannot get products ${err}`);
    }
  }

  async index(): Promise<user[]> {
 
    try {
      const conn = await Client.connect();
      const sql =
        'select id , firstName ,lastName as LastName , pwd from users';
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`cannot get users ${err}`);
    }
  }

  async show(id: number): Promise<user[]> {
    console.log(id)
    try {
      const conn = await Client.connect();

      const sql = `SELECT id , firstName ,lastName as LastName , pwd FROM  users where id=${id}`;

      const result = await conn.query(sql);

      conn.release();

      return result.rows;
    } catch (err) {
      throw new Error(`Could not find user ${id}. Error: ${err}`);
    }
  }

  async create(p: user): Promise<user> {

    try {
      const conn = await Client.connect();
    
      const hash = bcrypt.hashSync(p.pwd + pepper, parseInt(saltRounds));
     
      const sql = `INSERT INTO users (firstname, lastName, pwd ) VALUES('${p.firstname}', '${p.lastname}', '${hash}') RETURNING *`;

      const result = await conn.query(sql);
 
      const users = result.rows[0];

      conn.release();

      return users;
    } catch (err) {
      throw new Error(`Could not add new user ${p.firstname}. Error: ${err}`);
    }
  }

  async authenticate(
    firstName: string,
    password: string
  ): Promise<string | null> {
    const conn = await Client.connect();
    const sql = `SELECT pwd FROM users WHERE firstName='${firstName}'`;
    const result = await conn.query(sql);

    if (result.rows.length) {
      const user = result.rows[0];

      if (bcrypt.compareSync(password + pepper, user.pwd)) {
        return 'login succesfuly';
      }
    }

    return null;
  }
}
