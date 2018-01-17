import React from 'react';
import refreshIcon from 'Icons/refresh.svg';
import allGrid from 'Icons/all-grid.svg';
import listGrid from 'Icons/list-grid.svg';

const FilterList = () => (
  <ul className="filter-list grid-x">
    <li className="filter-list__item filter-list__item--show-large filter-list__item--centered large-3">
      <div className="filter-list__item__title grid-x">
        <p className="filter-list__item__title__name medium-10">Filter</p>
        <div className="filter-list__item__title__refresh medium-2">
          {refreshIcon}
        </div>
      </div>
    </li>

    <li className="filter-list__item  filter-list__item--show-small filter-list__item--centered small-12">
      <p className="filter-list__item__title__name medium-10">Filter</p>
    </li>

    <li className="filter-list__item filter-list__item--show-medium filter-list__item--centered medium-4 large-3">
      <select defaultValue="1" className="filter-list__item__select">
        <option disabled value="1">
          Sort by: Price
        </option>
      </select>
    </li>
    <li className="filter-list__item filter-list__item--show-medium filter-list__item--centered medium-3 large-3">
      <select defaultValue="1" className="filter-list__item__select">
        <option disabled value="1">
          Show : 16
        </option>
      </select>
    </li>
    <li className="filter-list__item filter-list__item--show-medium medium-5 large-3">
      <div className="grid-x">
        <button className="filter-list__item__button medium-3">
          {allGrid}
        </button>
        <button className="filter-list__item__button medium-3">
          {listGrid}
        </button>
        <button className="filter-list__item__button filter-list__item__button--selected medium-6">
          View All
        </button>
      </div>
    </li>
  </ul>
);

export default FilterList;
