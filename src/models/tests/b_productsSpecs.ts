import { products, product } from '../products';

const prods = new products();

describe('products Model', () => {
  it('should have an index method', () => {
    expect(prods.index).toBeDefined();
  });

  it('should have an show method', () => {
    expect(prods.show).toBeDefined();
  });

  it('should have an create method', () => {
    expect(prods.create).toBeDefined();
  });

  it('reset sequence', async () => {
    const result = await prods.resetSeq();
    expect(result).toEqual('seq reset');
  });

  it('create method should add a product', async () => {
    const result = await prods.create({
      name: 'Coffee Bean',
      price: 250,
      category: 'Beverage'
    });
    expect(result).toEqual({
      id: 1,
      name: 'Coffee Bean',
      price: 250,
      category: 'Beverage'
    });
  });

  it('index method should return a list of products', async () => {
    const result = await prods.index();
    expect(result).toEqual([
      {
        id: 1,
        name: 'Coffee Bean',
        price: 250,
        category: 'Beverage'
      }
    ]);
  });

  it('show method should return the correct product', async () => {
    const result = await prods.show('1');
    expect(result).toEqual([
      {
        id: 1,
        name: 'Coffee Bean',
        price: 250,
        category: 'Beverage'
      }
    ]);
  });
});
