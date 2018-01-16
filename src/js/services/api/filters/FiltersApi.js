import delay from '../delay';
import filterOptions from './filters.json';

export default class FilterApi {
  static getAllFilters() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign({}, filterOptions));
      }, delay);
    });
  }

  static getAllCategoriesOptions() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], filterOptions.categories));
      }, delay);
    });
  }

  static getAllSizesOptions() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], filterOptions.sizes));
      }, delay);
    });
  }
}
