import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'Components/Dropdown/Select';

import RefreshIcon from 'Components/Icons/RefreshIcon';
import AllGridIcon from 'Components/Icons/AllGridIcon';
import ListGridIcon from 'Components/Icons/ListGridIcon';


export default class FiltersTopBar extends Component {
  constructor() {
    super();

    this.changePriceHandler = this.changePriceHandler.bind(this);
    this.changeViewOffset = this.changeViewOffset.bind(this);
    this.handleResetFilters = this.handleResetFilters.bind(this);
    this.changeViewGrid = this.changeViewGrid.bind(this);
  }

  changePriceHandler(selectedValue) {
    const { prices, filterItemsByPrice } = this.props;
    const price = prices.find(p => p.name === selectedValue);

    filterItemsByPrice(price);
  }

  changeViewOffset(selectedValue) {
    const { changeItemsViewOffset } = this.props;
    changeItemsViewOffset(selectedValue);
  }

  changeViewGrid(selectedValue) {
    const { showProductGrid } = this.props;
    showProductGrid(selectedValue);
  }
  handleResetFilters() {
    this.props.resetFilters();
  }

  render() {
    const {
      prices, displayItems, reset, itemsPageOffset, productGrid,
    } = this.props;

    return (
      <ul className="filter-list grid-x">
        <li className="filter-list__item filter-list__item--show-large filter-list__item--centered large-3">
          <div className="filter-list__item__title grid-x">
            <p className="filter-list__item__title__name medium-10">Filter</p>
            <div className="filter-list__item__title__refresh medium-2">
              <button onClick={this.handleResetFilters}>
                <RefreshIcon />
              </button>
            </div>
          </div>
        </li>

        <li className="filter-list__item  filter-list__item--show-small filter-list__item--centered medium-12">
          <p className="filter-list__item__title__name medium-10"> Filter</p>
        </li>

        <li className="filter-list__item filter-list__item--show-medium filter-list__item--centered medium-4 large-3">
          Sort By Price:
          <Select
            items={prices}
            reset={reset}
            defaultOption="None"
            handleSelectChange={this.changePriceHandler}
          />
        </li>
        <li className="filter-list__item filter-list__item--show-medium filter-list__item--centered medium-3 large-3">
          Show:
          <Select
            items={displayItems}
            reset={reset}
            defaultOption={`${itemsPageOffset}`}
            handleSelectChange={this.changeViewOffset}
          />
        </li>
        <li className="filter-list__item filter-list__item--show-medium medium-5 large-3">
          <div className="grid-x">
            <button
              className={`filter-list__item__button medium-3 ${productGrid ? 'filter-list__item__button--selected' : ''}`}
              onClick={() => this.changeViewGrid(1)}
            >
              <AllGridIcon />
            </button>
            <button
              className={`filter-list__item__button medium-3 ${!productGrid ? 'filter-list__item__button--selected' : ''}`}
              onClick={() => this.changeViewGrid(0)}
            >
              <ListGridIcon />
            </button>
            <button
              onClick={() => this.changeViewOffset(0)}
              className="filter-list__item__button filter-list__item__button--selected medium-6"
            >
      View All
            </button>
          </div>
        </li>
      </ul>
    );
  }
}

FiltersTopBar.propTypes = {
  productGrid: PropTypes.bool.isRequired,
  itemsPageOffset: PropTypes.number.isRequired,
  reset: PropTypes.bool.isRequired,
  prices: PropTypes.array.isRequired,
  displayItems: PropTypes.array.isRequired,
  resetFilters: PropTypes.func.isRequired,
  changeItemsViewOffset: PropTypes.func.isRequired,
  filterItemsByPrice: PropTypes.func.isRequired,
  showProductGrid: PropTypes.func.isRequired,
};
