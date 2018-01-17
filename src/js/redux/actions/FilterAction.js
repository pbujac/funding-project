import * as type from 'Constants/FilterConstants';
import FilterApi from 'Api/filters/FiltersApi';

export function fetchingFilters() {
  return { type: type.FETCHING_FILTERS };
}

export function fetchFiltersSuccess(filters) {
  return {
    type: type.FETCHING_FILTERS_SUCCESS,
    filters,
  };
}

export function fetchFiltersError(error) {
  return {
    type: type.FETCHING_FILTERS_FAILURE,
    error,
  };
}

export const fetchFilters = () => (dispatch) => {
  dispatch(fetchingFilters());

  return FilterApi.getAllFilters()
    .then(res => dispatch(fetchFiltersSuccess(res)))
    .catch(err => dispatch(fetchFiltersError(err)));
};
