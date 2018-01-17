import delay from '../delay';
import products from './products.json';

class ProductsApi {
  static getAllProducts() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], products.products));
      }, delay);
    });
  }
}

export default ProductsApi;
