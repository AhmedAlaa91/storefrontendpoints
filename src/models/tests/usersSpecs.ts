import { users, user } from '../users';

import bcrypt from 'bcrypt';

const pepper = process.env.BYCRYPT_PASSWORD;
const saltRounds = '' + process.env.SALT_ROUNDS;

const usr = new users();

describe('users Model', () => {
  it('should have an index method', () => {
    expect(usr.index).toBeDefined();
  });

  it('should have an show method', () => {
    expect(usr.show).toBeDefined();
  });

  it('should have an create method', () => {
    expect(usr.create).toBeDefined();
  });

  it('reset sequence user table', async () => {
    const result = await usr.resetSeq();
    expect(result).toEqual('seq reset');
  });

  it('create method should add a user', async () => {
    const result = await usr.create({
      firstname: 'User one',
      lastname: 'first',
      pwd: 'Password123'
    });
    expect(result).toBeTruthy();
  });

  it('Authenticate a user', async () => {
    const result = await usr.authenticate('User one', 'Password123');
    expect(result).toBe('login succesfuly');
  });
});
