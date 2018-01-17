import * as type from 'Constants/ProductsConstants';
import ProductsApi from 'Api/products/ProductsApi';

export function fetchingProducts() {
  return { type: type.FETCHING_PRODUCTS };
}

export function fetchingProductsSuccess(products) {
  return {
    type: type.FETCHING_PRODUCTS_SUCCESS,
    products,
  };
}

export function fetchingProductsError(error) {
  return {
    type: type.FETCHING_PRODUCTS_FAILURE,
    error,
  };
}

export const fetchProducts = () => (dispatch) => {
  dispatch(fetchingProducts());

  return ProductsApi.getAllProducts()
    .then(res => dispatch(fetchingProductsSuccess(res)))
    .catch(err => dispatch(fetchingProductsError(err)));
};
