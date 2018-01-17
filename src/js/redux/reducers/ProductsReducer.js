import * as type from 'Constants/ProductsConstants';

const initialState = {
  products: [],
  isFetching: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case type.FETCHING_PRODUCTS:
      return Object.assign({}, state, {
        fetching: true,
      });

    case type.FETCHING_PRODUCTS_SUCCESS:
      return Object.assign({}, state, {
        fetching: false,
        products: action.products,
      });

    case type.FETCHING_PRODUCTS_FAILURE:
      return state.merge({
        fetching: false,
        error: action.error,
      });

    default:
      return state;
  }
};
