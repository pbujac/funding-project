import React from 'react';

const FiltersSidebar = () => (
  <ul className="filter-sidebar medium-4 large-3">
    <li className="filter-sidebar__item__category">
      <div className="filter-sidebar__item__category__header">
        <p className="filter-sidebar__item__category__title">Categories</p>
        <button className="filter-sidebar__item__category__btn-close">+</button>
      </div>
      <ul className="filter-sidebar__item__category__submenu">
        <li className="filter-sidebar__item__category__submenu__item">
          <input
            type="checkbox"
            className="filter-sidebar__item__category__submenu__item__checkbox"
          />
          Lifestyle
          <span className="filter-sidebar__item__category__submenu__item__number">
            13
          </span>
        </li>
        <li className="filter-sidebar__item__category__submenu__item">
          <input
            className="filter-sidebar__item__category__submenu__item__checkbox"
            type="checkbox"
          />Running
          <span className="filter-sidebar__item__category__submenu__item__number">
            13
          </span>
        </li>

        <li className="filter-sidebar__item__category__submenu__item">
          <input
            type="checkbox"
            className="filter-sidebar__item__category__submenu__item__checkbox"
          />
          Gym
          <span className="filter-sidebar__item__category__submenu__item__number">
            13
          </span>
        </li>

        <li className="filter-sidebar__item__category__submenu__item">
          <input
            className="filter-sidebar__item__category__submenu__item__checkbox"
            type="checkbox"
          />Clothing
          <span className="filter-sidebar__item__category__submenu__item__number">
            20
          </span>
        </li>

        <li className="filter-sidebar__item__category__submenu__item">
          <input
            className="filter-sidebar__item__category__submenu__item__checkbox"
            type="checkbox"
          />Scarves
          <span className="filter-sidebar__item__category__submenu__item__number">
            13
          </span>
        </li>
        <li className="filter-sidebar__category__item__submenu__item">
          <input
            className="filter-sidebar__item__category__submenu__item__checkbox"
            type="checkbox"
          />Accessories
          <span className="filter-sidebar__item__category__submenu__item__number">
            13
          </span>
        </li>
      </ul>
    </li>

    <li className="filter-sidebar__item__size">
      <div className="filter-sidebar__item__size__header">
        <p className="filter-sidebar__item__size__title">Size</p>
        <button className="filter-sidebar__item__size__btn-close">+</button>
      </div>
      <ul className="filter-sidebar__item__size__submenu">
        <li className="filter-sidebar__item__size__submenu__item">
          <button className="filter-sidebar__item__size__submenu__item__button">
            S
          </button>
        </li>
        <li className="filter-sidebar__item__size__submenu__item filter-sidebar__item__size__submenu__item--active">
          <button className="filter-sidebar__item__size__submenu__item__button">
            M
          </button>
        </li>
        <li className="filter-sidebar__item__size__submenu__item">
          <button className="filter-sidebar__item__size__submenu__item__button">
            X
          </button>
        </li>
        <li className="filter-sidebar__item__size__submenu__item">
          <button className="filter-sidebar__item__size__submenu__item__button">
            L
          </button>
        </li>
      </ul>
    </li>
  </ul>
);

export default FiltersSidebar;
