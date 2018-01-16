import delay from '../delay';
import cart from './cart.api';

class CartApi {
  static getAllCartProducts() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], cart.products));
      }, delay);
    });
  }

  static addCartProductItem(item) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const product = cart.products.find(p => p.id === item.id);
        if (!product) {
          cart.products.push(item);
        }
        resolve(Object.assign([], cart.products));
      }, delay);
    });
  }

  static removeCartProductItem(product) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = cart.products.map(p => p.id).indexOf(product.id);
        cart.products.splice(index, 1);
        resolve(Object.assign([], cart.products));
      }, delay);
    });
  }
}

export default CartApi;
