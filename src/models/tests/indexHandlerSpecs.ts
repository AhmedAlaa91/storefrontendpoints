import app from "../..";

import supertest from 'supertest';

const request = supertest(app);

describe('endpoint Test currentorders  responses', () => {
    it('gets the api endpoint', async () => {

      const token= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3IiOnsiaWQiOjEsImZpcnN0bmFtZSI6ImxpbG8iLCJsYXN0bmFtZSI6ImFsYWEiLCJwd2QiOiIkMmIkMTAkNXJoZ0F1RVNlb2I4QzJTN28vd3J6dVVtNU5jaUZMSDZxakhEakhJTEhZUVFUS1dUVGI5bkcifSwiaWF0IjoxNjczMzQ4ODUyfQ.sVHjXz3EJ6ooe7CgK_xypbORcjdRR1MPRrUHuB-nMJ8'
       
      const response = await request.get(
        '/currentorders'
      ).set("Authorization", "bearer " + token);
      expect(response.statusCode).toBe(200);
    });
  });


  describe('endpoint Test addorder  responses', () => {
    it('gets the api endpoint', async () => {

      const token= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3IiOnsiaWQiOjEsImZpcnN0bmFtZSI6ImxpbG8iLCJsYXN0bmFtZSI6ImFsYWEiLCJwd2QiOiIkMmIkMTAkNXJoZ0F1RVNlb2I4QzJTN28vd3J6dVVtNU5jaUZMSDZxakhEakhJTEhZUVFUS1dUVGI5bkcifSwiaWF0IjoxNjczMzQ4ODUyfQ.sVHjXz3EJ6ooe7CgK_xypbORcjdRR1MPRrUHuB-nMJ8'
       
      const response = await request.post(
        '/addorder'
      ).set("Authorization", "bearer " + token);
      expect(response.statusCode).toBe(200);
    });
  });



  describe('endpoint Test getorders  responses', () => {
    it('gets the api endpoint', async () => {

      const token= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3IiOnsiaWQiOjEsImZpcnN0bmFtZSI6ImxpbG8iLCJsYXN0bmFtZSI6ImFsYWEiLCJwd2QiOiIkMmIkMTAkNXJoZ0F1RVNlb2I4QzJTN28vd3J6dVVtNU5jaUZMSDZxakhEakhJTEhZUVFUS1dUVGI5bkcifSwiaWF0IjoxNjczMzQ4ODUyfQ.sVHjXz3EJ6ooe7CgK_xypbORcjdRR1MPRrUHuB-nMJ8'
       
      const response = await request.get(
        '/orders'
      ).set("Authorization", "bearer " + token);
      expect(response.statusCode).toBe(200);
    });
  });


  describe('endpoint Test addproducts  responses', () => {
    it('gets the api endpoint', async () => {

      const token= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3IiOnsiaWQiOjEsImZpcnN0bmFtZSI6ImxpbG8iLCJsYXN0bmFtZSI6ImFsYWEiLCJwd2QiOiIkMmIkMTAkNXJoZ0F1RVNlb2I4QzJTN28vd3J6dVVtNU5jaUZMSDZxakhEakhJTEhZUVFUS1dUVGI5bkcifSwiaWF0IjoxNjczMzQ4ODUyfQ.sVHjXz3EJ6ooe7CgK_xypbORcjdRR1MPRrUHuB-nMJ8'
       
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
  });



    describe('endpoint Test getallproducts  responses', () => {
      it('gets the api endpoint', async () => {
  

        const response = await request.get(
          '/products'
        )
        expect(response.statusCode).toBe(200);
      });
    });
  

    describe('endpoint Test getspecificproduct  responses', () => {
      it('gets the api endpoint', async () => {
  

        const response = await request.get(
          '/products/:id'
        ).send({"id":1
        })
        .set("Accept", "application/json");
        expect(response.statusCode).toBe(200);
      });
    });


    describe('endpoint Test login  responses', () => {
      it('gets the api endpoint', async () => {
  
        const token= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3IiOnsiaWQiOjEsImZpcnN0bmFtZSI6ImxpbG8iLCJsYXN0bmFtZSI6ImFsYWEiLCJwd2QiOiIkMmIkMTAkNXJoZ0F1RVNlb2I4QzJTN28vd3J6dVVtNU5jaUZMSDZxakhEakhJTEhZUVFUS1dUVGI5bkcifSwiaWF0IjoxNjczMzQ4ODUyfQ.sVHjXz3EJ6ooe7CgK_xypbORcjdRR1MPRrUHuB-nMJ8'
         
        const response = await request.post(
          '/login'
        ).set("Authorization", "bearer " + token).send({
          "firstname": "User one",
          "pwd": "Lilo@2023"
        })
        .set("Accept", "application/json");
        expect(response.statusCode).toBe(200);
      });

  });



  describe('endpoint Test createuser  responses', () => {
    it('gets the api endpoint', async () => {

      const token= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3IiOnsiaWQiOjEsImZpcnN0bmFtZSI6ImxpbG8iLCJsYXN0bmFtZSI6ImFsYWEiLCJwd2QiOiIkMmIkMTAkNXJoZ0F1RVNlb2I4QzJTN28vd3J6dVVtNU5jaUZMSDZxakhEakhJTEhZUVFUS1dUVGI5bkcifSwiaWF0IjoxNjczMzQ4ODUyfQ.sVHjXz3EJ6ooe7CgK_xypbORcjdRR1MPRrUHuB-nMJ8'
       
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

});



describe('endpoint Test getspecificuser  responses', () => {
  it('gets the api endpoint', async () => {

    const token= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3IiOnsiaWQiOjEsImZpcnN0bmFtZSI6ImxpbG8iLCJsYXN0bmFtZSI6ImFsYWEiLCJwd2QiOiIkMmIkMTAkNXJoZ0F1RVNlb2I4QzJTN28vd3J6dVVtNU5jaUZMSDZxakhEakhJTEhZUVFUS1dUVGI5bkcifSwiaWF0IjoxNjczMzQ4ODUyfQ.sVHjXz3EJ6ooe7CgK_xypbORcjdRR1MPRrUHuB-nMJ8'
     
    const response = await request.get(
      '/users'
    ).set("Authorization", "bearer " + token).send({
      "id":1
    })
    .set("Accept", "application/json");
    expect(response.statusCode).toBe(200);
  });

});



describe('endpoint Test getallusers  responses', () => {
  it('gets the api endpoint', async () => {

    const token= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3IiOnsiaWQiOjEsImZpcnN0bmFtZSI6ImxpbG8iLCJsYXN0bmFtZSI6ImFsYWEiLCJwd2QiOiIkMmIkMTAkNXJoZ0F1RVNlb2I4QzJTN28vd3J6dVVtNU5jaUZMSDZxakhEakhJTEhZUVFUS1dUVGI5bkcifSwiaWF0IjoxNjczMzQ4ODUyfQ.sVHjXz3EJ6ooe7CgK_xypbORcjdRR1MPRrUHuB-nMJ8'
     
    const response = await request.get(
      '/users'
    ).set("Authorization", "bearer " + token);
    expect(response.statusCode).toBe(200);
  });

});