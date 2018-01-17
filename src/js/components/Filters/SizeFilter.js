import React from 'react';
import Checkbox from 'Components/Checkbox/Checkbox';

const SizeFilter = sizes => (
  <ul className="filter-sidebar__item__size__submenu">

    {sizes.sizes.map(size => (
      <li key={size.id} className="filter-sidebar__item__size__submenu__item">
        <Checkbox
          reset={sizes.reset}
          filterObj={size}
          toggleFilter={sizes.toggleSizeFilter}
        />
      </li>
    ))}

  </ul>
);

export default SizeFilter;
