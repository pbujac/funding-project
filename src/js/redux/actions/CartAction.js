import * as type from 'Constants/CartConstants';
import CartApi from 'Api/cart/CartApi';


export function calculateItemsSum(cartProducts) {
  let counter = 0;

  cartProducts.map((p) => {
    counter += p.quantity;
    return counter;
  });

  return counter;
}

export function fetchingCartProducts() {
  return { type: type.FETCHING_CART };
}


export function fetchingCartProductsSuccess(cartProducts) {
  const counter = calculateItemsSum(cartProducts);

  return {
    type: type.FETCHING_CART_PRODUCTS_SUCCESS,
    cartProducts,
    counter,
  };
}

export function fetchingCartProductsError(error) {
  return {
    type: type.FETCHING_CART_PRODUCTS_FAILURE,
    error,
  };
}


export const fetchCartProducts = () => (dispatch) => {
  dispatch(fetchingCartProducts());

  return CartApi.getAllCartProducts()
    .then(res => dispatch(fetchingCartProductsSuccess(res)))
    .catch(err => dispatch(fetchingCartProductsError(err)));
};

export const addToCart = item => (dispatch) => {
  dispatch(fetchingCartProducts());

  return CartApi.addCartProductItem(item)
    .then(res => dispatch(fetchingCartProductsSuccess(res)))
    .catch(err => dispatch(fetchingCartProductsError(err)));
};


export const removeFromCart = item => (dispatch) => {
  dispatch(fetchingCartProducts());

  return CartApi.removeCartProductItem(item)
    .then(res => dispatch(fetchingCartProductsSuccess(res)))
    .catch(err => dispatch(fetchingCartProductsError(err)));
};
