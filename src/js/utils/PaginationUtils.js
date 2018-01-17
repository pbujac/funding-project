import * as _ from 'underscore';

export default class PaginationUtils {
  static getPaginationItems(totalItems, currentPage, pageSize) {
    const defaultPageOffset = 5;
    const currentPageInit = currentPage || 1;
    const currentPageSize = pageSize || defaultPageOffset;
    let startPage;
    let endPage;

    const totalPages = Math.ceil(totalItems / currentPageSize);

    if (totalPages <= defaultPageOffset) {
      startPage = 1;
      endPage = totalPages;
    } else if (currentPageInit <= 6) {
      startPage = 1;
      endPage = defaultPageOffset;
    } else if (currentPageInit + 4 >= totalPages) {
      startPage = totalPages - (defaultPageOffset - 1);
      endPage = totalPages;
    } else {
      startPage = currentPageInit - 5;
      endPage = currentPageInit + 4;
    }

    const startIndex = (currentPageInit - 1) * currentPageSize;
    const endIndex = Math.min((startIndex + currentPageSize) - 1, totalItems - 1);

    const pages = _.range(startPage, endPage + 1);

    return {
      totalItems,
      currentPageInit,
      currentPageSize,
      totalPages,
      startPage,
      endPage,
      startIndex,
      endIndex,
      pages,
    };
  }
}
