import { orders, order } from '../orders';

const ord = new orders();

describe('orders Model', () => {
  it('should have an index method', () => {
    expect(ord.index).toBeDefined();
  });

  it('should have a show active orders method', () => {
    expect(ord.showActive).toBeDefined();
  });

  it('should have a show complete orders', () => {
    expect(ord.showComplete).toBeDefined();
  });
});
