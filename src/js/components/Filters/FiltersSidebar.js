import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Accordion from 'Components/Accordion/Accordion';
import CategoryFilter from './CategoryFilter';
import SizeFilter from './SizeFilter';

class FiltersSidebar extends Component {
  constructor() {
    super();
    this.state = {
      categoryFilterOptions: new Set(),
      sizeFilterOptions: new Set(),
    };
    this.toggleCategoryFilter = this.toggleCategoryFilter.bind(this);
    this.toggleSizeFilter = this.toggleSizeFilter.bind(this);
  }

  componentWillReceiveProps(props) {
    if (props.reset) {
      this.setState({
        categoryFilterOptions: new Set(),
        sizeFilterOptions: new Set(),
      });
    }
  }
  toggleCategoryFilter(filterObj) {
    const filterItems = this.checkExistFilter(this.state.categoryFilterOptions, filterObj);
    this.props.filterItems({
      category: Array.from(filterItems),
      size: Array.from(this.state.sizeFilterOptions),
    });
  }


  toggleSizeFilter(filterObj) {
    const filterItems = this.checkExistFilter(this.state.sizeFilterOptions, filterObj);
    this.props.filterItems({
      category: Array.from(this.state.categoryFilterOptions),
      size: Array.from(filterItems),
    });
  }

  checkExistFilter(filterItems, filterObj) {
    const filterObjName = filterObj.name;

    if (filterItems.has(filterObjName)) {
      filterItems.delete(filterObjName);
    } else {
      filterItems.add(filterObjName);
    }

    this.setState({});
    return filterItems;
  }

  render() {
    const { categories, sizes, reset } = this.props;

    return (
      <ul className="filter-sidebar medium-4 large-3">
        <li className="filter-sidebar__item__category">
          <Accordion title="Category">
            <CategoryFilter
              categories={categories}
              reset={reset}
              toggleCategoryFilter={this.toggleCategoryFilter}
            />
          </Accordion>
        </li>
        <li className="filter-sidebar__item__size">
          <Accordion title="Size">
            <SizeFilter
              sizes={sizes}
              reset={reset}
              toggleSizeFilter={this.toggleSizeFilter}
            />
          </Accordion>
        </li>
      </ul>
    );
  }
}

FiltersSidebar.propTypes = {
  reset: PropTypes.bool.isRequired,
  categories: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
  filterItems: PropTypes.func.isRequired,
};

export default FiltersSidebar;
