import * as type from 'Constants/CartConstants';

const initialState = {
  cartProducts: [],
  isFetching: false,
  error: '',
  counter: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case type.FETCHING_CART:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case type.FETCHING_CART_PRODUCTS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        cartProducts: action.cartProducts,
        counter: action.counter,
      });
    case type.FETCHING_CART_PRODUCTS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error,
      });
    case type.ADD_TO_CART_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        cartProducts: action.cartProducts,
        counter: action.counter,
      });
    case type.ADD_TO_CART_FAILURE:
      return state.merge({
        isFetching: false,
        error: action.error,
      });
    case type.REMOVE_FROM_CART_SUCCESS:
      return state.merge({
        isFetching: false,
        cartProducts: action.cartProducts,
        counter: action.counter,
      });
    case type.REMOVE_FROM_CART_FAILURE:
      return state.merge({
        isFetching: false,
        error: action.error,
      });
    default:
      return state;
  }
};
