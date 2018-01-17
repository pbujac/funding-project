import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as filerActions from 'Actions/FilterAction';
import FiltersTopBar from './FiltersTopBar';
import FiltersSidebar from './FiltersSidebar';

class GlobalFilter extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    this.props.fetchFilters();
  }


  render() {
    const prices = this.props.filters.prices;
    const displayItems = this.props.filters.displayItems;
    const categories = this.props.filters.categories;
    const sizes = this.props.filters.sizes;

    if (!categories && !sizes) {
      return null;
    }
    return (
      <div>
        <div className="large-12">
          <FiltersTopBar
            reset={false}
            resetFilters={this.props.resetFilters}
            prices={prices}
            displayItems={displayItems}
          />
        </div>
        <div className="medium-4 large-3">
          <FiltersSidebar
            reset={false}
            categories={categories}
            sizes={sizes}
          />
        </div>
      </div>
    );
  }
}

GlobalFilter.propTypes = {
  filters: PropTypes.object.isRequired,
  fetchFilters: PropTypes.func.isRequired,
  resetFilters: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filters: state.filters.filters,
  isFetching: state.filters.isFetching,
  error: state.filters.error,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchFilters: filerActions.fetchFilters }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GlobalFilter);
