import { orders, order } from '../orders';

const ord = new orders();

describe('orders Model', () => {
  it('should have an index method', () => {
    expect(ord.index).toBeDefined();
  });

  it('should have an create method', () => {
    expect(ord.create).toBeDefined();
  });


  it('create method should create an order ', async () => {
    const result = await ord.create();
    expect(result).toEqual([{
      "id": 1,
      "user_id": 1,
      "status": "active"
  }]);
  });


  it('index method should show all orders ', async () => {
    const result = await ord.index();
    expect(result).toEqual([{
      "id": 1,
      "user_id": 1,
      "status": "active"
  }]);
  });

});
