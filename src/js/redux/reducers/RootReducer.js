import { combineReducers } from 'redux';
import ProductsReducer from 'Reducers/ProductsReducer';
import CartReducer from 'Reducers/CartReducer';
import FiltersReducer from 'Reducers/FiltersReducer';

const rootReducer = combineReducers({
  products: ProductsReducer,
  cart: CartReducer,
  filters: FiltersReducer,
});

export default rootReducer;
