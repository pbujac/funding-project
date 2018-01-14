import React from 'react';

const Pagination = () => (
  <section className="small-12 cell">
    <ul className="pagination">
      <li className="pagination__item">
        <i className="pagination__item__left" />
      </li>
      <li className="pagination__item pagination__item--active">1</li>
      <li className="pagination__item">2</li>
      <li className="pagination__item">3</li>
      <li className="pagination__item">4</li>
      <li className="pagination__item">
        <i className="pagination__item__right" />
      </li>
    </ul>
  </section>
);

export default Pagination;
