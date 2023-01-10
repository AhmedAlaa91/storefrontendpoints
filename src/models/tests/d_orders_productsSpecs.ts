import { OrderProduct, OrderProducts } from '../orders_products';



const ord = new OrderProducts();

describe('orders products Model', () => {
  it('should have an index method', () => {
    expect(ord.showActive).toBeDefined();
  });

  it('should have an create method',async () => {
    expect(ord.create).toBeDefined();
  });

  it('create method should add a order product', async () => {
    
    expect(ord.create()).toBeTruthy()
  });


  it('Showactive orders method should show current orders ', async () => {
  
    const result = await ord.showActive(1);
    expect(JSON.parse(JSON.stringify(result))).toEqual([{
        "quantity": 15,
        "name": "Coffee Bean",
        "status": "active",
        "firstname": "User one"
    }]
    );
   
  });

});



