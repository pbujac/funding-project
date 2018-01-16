import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PaginationUtils from 'Utils/PaginationUtils';

export default class Pagination extends Component {
  constructor() {
    super();
    this.state = { pager: {} };

    this.setPageItems = this.setPageItems.bind(this);
  }

  componentWillMount() {
    if (this.props.items && this.props.items.length) {
      this.setPageItems(this.props.initialPage);
    }
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.items !== prevProps.items ||
      this.props.itemsPageOffset !== prevProps.itemsPageOffset
    ) {
      this.setPageItems(this.props.initialPage);
    }
  }

  setPageItems(currentPage) {
    const items = this.props.items;
    let pager = this.state.pager;

    if (currentPage < 1 || currentPage > pager.totalPages) {
      return;
    }

    pager = PaginationUtils.getPaginationItems(
      items.length,
      currentPage,
      this.props.itemsPageOffset,
    );

    const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);
    this.setState({ pager });
    this.props.changePageHandler(pageOfItems);
  }

  render() {
    const pageItems = this.state.pager;
    if (!pageItems.pages || pageItems.pages.length < 1) {
      return null;
    }

    return (
      <ul className="pagination">
        <li >
          <button
            className={`pagination__item ${pageItems.currentPageInit === 1 ? 'pagination__item--disabled' : ''}`}
            disabled={pageItems.currentPageInit === 1}
            onClick={() => this.setPageItems(pageItems.currentPageInit - 1)}
          >
            <i className="pagination__item__left" />
          </button>
        </li>

        {pageItems.pages.map(page => (
          <li key={page}>
            <button
              className={`pagination__item ${pageItems.currentPageInit === page ? 'pagination__item--active' : ''}`}
              onClick={() => this.setPageItems(page)}
            >
              {page}
            </button>
          </li>
        ))}
        <li>
          <button
            className={`pagination__item ${pageItems.currentPageInit === pageItems.totalPages ? 'pagination__item--disabled' : ''}`}
            onClick={() => this.setPageItems(pageItems.currentPageInit + 1)}
          >
            <i className="pagination__item__right" />
          </button>
        </li>
      </ul>
    );
  }
}

Pagination.defaultProps = { initialPage: 1 };

Pagination.propTypes = {
  initialPage: PropTypes.number,
  itemsPageOffset: PropTypes.number.isRequired,
  items: PropTypes.array.isRequired,
  changePageHandler: PropTypes.func.isRequired,
};
