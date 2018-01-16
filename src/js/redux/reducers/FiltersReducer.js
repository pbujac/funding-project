import * as type from 'Constants/FilterConstants';

const initialState = {
  filters: {},
  isFetching: false,
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case type.FETCHING_FILTERS:
      return Object.assign({}, state, {
        isFetching: true,
      });

    case type.FETCHING_FILTERS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        filters: Object.assign({}, action.filters),
      });

    case type.FETCHING_FILTERS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error,
      });

    default:
      return state;
  }
};
