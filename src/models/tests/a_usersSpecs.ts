import { users, user } from '../users';




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

  it('should have an authenticate method', () => {
    expect(usr.authenticate).toBeDefined();
  });


  it('reset sequence user table', async () => {
    const result = await usr.resetSeq();
    expect(result).toEqual('seq reset');
  });
    


  let userCreated:user
  it('create method should add a user', async () => {
    const result = await usr.create({
      firstname: 'User one',
      lastname: 'first',
      pwd: 'Password123'
    });
    userCreated=result
    expect(result).toBeTruthy();
    
  });

 // it('Authenticate a user', async () => {
    //const result = await usr.authenticate('User one', 'Password');
   // expect(result).toBeTruthy()
 // });

 

  it('show method should show a user', async () => {
    const result = await usr.show(1);
    expect(result).toEqual([userCreated]);
  });

  it('index method should show all users ', async () => {
    const result = await usr.index();
    expect(result).toEqual([userCreated]);
  });



  

});



