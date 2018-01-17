/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Product from 'Components/Product/Product';
import Pagination from 'Components/Pagination/Pagination';
import FiltersTopBar from 'Components/Filters/FiltersTopBar';
import FiltersSidebar from 'Components/Filters/FiltersSidebar';
import { addToCart, removeFromCart } from 'Actions/CartAction';
import { fetchProducts } from 'Actions/ProductsAction';
import { fetchFilters } from 'Actions/FilterAction';
import _ from 'underscore';

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      viewItemsProduct: [],
      itemsPageOffset: 6,
      productGrid: true,
      resetFilterState: false,
    };

    this.changePageHandler = this.changePageHandler.bind(this);
    this.resetFiltersHandler = this.resetFiltersHandler.bind(this);
    this.changeItemsViewOffset = this.changeItemsViewOffset.bind(this);
    this.filterItemsByPrice = this.filterItemsByPrice.bind(this);
    this.filterItemsByCategoryAndSize = this.filterItemsByCategoryAndSize.bind(this);
    this.showProductGrid = this.showProductGrid.bind(this);
  }

  componentWillMount() {
    this.props.getProducts().then(r => this.setState({ products: r.products }));
    this.props.fetchFilters();
  }

  changePageHandler(viewItemsProduct) {
    this.setState({ viewItemsProduct });
  }

  changeItemsViewOffset(itemsViewOffset) {
    let offset = Number(itemsViewOffset) || this.state.itemsPageOffset;
    this.setState({ itemsPageOffset: offset, resetFilterState: false });
    if (itemsViewOffset === 0) {
      offset = this.props.products.length;
      this.setState({
        products: this.props.products,
        itemsPageOffset: offset,
        resetFilterState: true,
      });
    }
  }

  showProductGrid(productGridState) {
    const productGrid = Boolean(productGridState);
    this.setState({ productGrid });
  }

  filterItemsByCategoryAndSize(filterOptions) {
    const products = this.props.products;
    const appliedFilters = [];

    if (
      (filterOptions.category && filterOptions.category.length > 0)
      || (filterOptions.size && filterOptions.size.length > 0)) {
      ['category', 'size'].forEach((filterBy) => {
        const filterValue = filterOptions[filterBy];

        if (filterValue && filterValue.length > 0) {
          this.applyFilters(appliedFilters, filterBy, filterValue, products);
        }
      });
      this.setState({ products: Object.assign([], ...appliedFilters), resetFilterState: false });
    } else {
      this.setState({
        products: this.props.products,
        viewItemsProduct: this.props.products,
        resetFilterState: false,
      });
    }
  }

  applyFilters(appliedFilters, filterBy, filterValue, products) {
    if (appliedFilters.length > 0) {
      appliedFilters.push(appliedFilters.filter(item =>
        _.intersection(item[filterBy], filterValue).length > 0));
    } else {
      appliedFilters.push(products.filter(item =>
        _.intersection(item[filterBy], filterValue).length > 0));
    }
  }

  filterItemsByPrice(selectedPrice) {
    let products = this.props.products;

    products = products.filter(product =>
      product.price >= selectedPrice.minPrice && product.price <= selectedPrice.maxPrice);

    this.setState({ products, resetFilterState: false });
  }

  resetFiltersHandler() {
    this.setState({
      resetFilterState: true,
      products: this.props.products,
    });
  }

  render() {
    const {
      prices, displayItems, categories, sizes,
    } = this.props.filters;
    const {
      viewItemsProduct, products, itemsPageOffset, resetFilterState, productGrid,
    } = this.state;

    if (!categories && !sizes && !prices && !displayItems) {
      return null;
    }
    return (
      <div className="grid-x">
        <section className="small-12">
          <FiltersTopBar
            reset={resetFilterState}
            resetFilters={this.resetFiltersHandler}
            productGrid={productGrid}
            showProductGrid={this.showProductGrid}
            itemsPageOffset={itemsPageOffset}
            changeItemsViewOffset={this.changeItemsViewOffset}
            filterItemsByPrice={this.filterItemsByPrice}
            filterItems={this.filterItemsByCategoryAndSize}
            prices={prices}
            displayItems={displayItems}
          />
        </section>
        <section className="medium-4 large-3">
          <FiltersSidebar
            reset={resetFilterState}
            filterItems={this.filterItemsByCategoryAndSize}
            changeItemsViewOffset={this.changeItemsViewOffset}
            categories={categories}
            sizes={sizes}
          />
        </section>

        <section className="medium-8 large-9">
          <div className="product-list grid-x grid-margin-x">
            {viewItemsProduct.length > 0
              ? viewItemsProduct.map(product => (
                <Product
                  key={product.id}
                  product={product}
                  productGrid={productGrid}
                  addToCartHandler={this.props.addToCartHandler}
                  removeFromCartHandler={this.props.removeFromCartHandler}
                />
              )) : <div>No product</div>
            }
          </div>

        </section>
        <section className="small-12 cell">
          <Pagination
            items={products}
            itemsPageOffset={itemsPageOffset}
            changePageHandler={this.changePageHandler}
          />
        </section>
      </div>
    );
  }
}

ProductList.propTypes = {
  filters: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired,
  fetchFilters: PropTypes.func.isRequired,
  getProducts: PropTypes.func.isRequired,
  addToCartHandler: PropTypes.func.isRequired,
  removeFromCartHandler: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  products: state.products.products,
  filters: state.filters.filters,
  isFetching: state.products.fetching,
  error: state.products.error,
});

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(fetchProducts()),
  addToCartHandler: item => dispatch(addToCart(item)),
  removeFromCartHandler: item => dispatch(removeFromCart(item)),
  fetchFilters: () => dispatch(fetchFilters()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

