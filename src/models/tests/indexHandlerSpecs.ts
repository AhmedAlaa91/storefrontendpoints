import app from "../..";

import supertest from 'supertest';

const request = supertest(app);
describe('Endpoints Test responses', () => {
let token =''
beforeAll(async () => {
  const response = await supertest(app).post('/login').send({  
    "firstname": "User one",
    "pwd": "Password123"
})
  .set("Accept", "application/json");
  token = response.body;
  
});




    it('current orders api endpoint', async () => {


      const response = await request.get(
        '/currentorders'
      ).set("Authorization", "bearer " + token);
      expect(response.statusCode).toBe(200);
    });
  


    it('addorder api endpoint', async () => {


      const response = await request.post(
        '/addorder'
      ).set("Authorization", "bearer " + token);
      expect(response.statusCode).toBe(200);
    });
  



 
    it('getorders api endpoint', async () => {


      const response = await request.get(
        '/orders'
      ).set("Authorization", "bearer " + token);
      expect(response.statusCode).toBe(200);
    });
  



    it('addproducts api endpoint', async () => {


      const response = await request.post(
        '/products'
      ).set("Authorization", "bearer " + token).send({
        name: "coffee",
        price: "300",
        category: "beverage"
      })
      .set("Accept", "application/json");
      expect(response.statusCode).toBe(200);
    });




      it('getproducts api endpoint', async () => {
  

        const response = await request.get(
          '/products'
        )
        expect(response.statusCode).toBe(200);
      });
  
  

  
      it('getproductperid api endpoint', async () => {
  

        const response = await request.get(
          '/products/:id'
        ).send({"id":1
        })
        .set("Accept", "application/json");
        expect(response.statusCode).toBe(200);
      });
 



      it('login api endpoint', async () => {
  
  
        const response = await request.post(
          '/login'
        ).send({
          "firstname": "User one",
          "pwd": "alaa"
        })
        .set("Accept", "application/json");
        expect(response.statusCode).toBe(200);
      });





 
    it('adduser api endpoint', async () => {


      const response = await request.post(
        '/users'
      ).set("Authorization", "bearer " + token).send({
        "firstname": "User two",
        "lastname":"okay",
        "pwd": "Lilo@2023"
      })
      .set("Accept", "application/json");
      expect(response.statusCode).toBe(200);
    });





  it('getuser the api endpoint', async () => {


    const response = await request.get(
      '/users'
    ).set("Authorization", "bearer " + token).send({
      "id":1
    })
    .set("Accept", "application/json");
    expect(response.statusCode).toBe(200);
  });






  it('getusers api endpoint', async () => {


    const response = await request.get(
      '/users'
    ).set("Authorization", "bearer " + token);
    expect(response.statusCode).toBe(200);
  });

});