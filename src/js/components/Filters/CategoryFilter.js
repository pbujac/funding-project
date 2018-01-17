import React from 'react';
import Checkbox from 'Components/Checkbox/Checkbox';

const CategoryFilter = categories => (
  <ul className="filter-sidebar__item__category__submenu">

    {categories.categories.map(category => (

      <li key={category.id} className="filter-sidebar__item__category__submenu__item">
        <Checkbox
          reset={categories.reset}
          filterObj={category}
          toggleFilter={categories.toggleCategoryFilter}
        />
        <span className="filter-sidebar__item__category__submenu__item__number">
          {category.items}
        </span>
      </li>

    ))}

  </ul>
);

export default CategoryFilter;
