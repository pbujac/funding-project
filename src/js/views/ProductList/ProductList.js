import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Product from 'Components/Product/Product';
import Pagination from 'Components/Pagination/Pagination';
import { addToCart, removeFromCart } from 'Actions/CartAction';
import { fetchProducts } from 'Actions/ProductsAction';

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      viewItemsProduct: [],
      itemsPageOffset: 2,
    };

    this.changePageHandler = this.changePageHandler.bind(this);
  }

  componentWillMount() {
    this.props.getProducts().then(r => this.setState({ products: r.products }));
  }

  changePageHandler(viewItemsProduct) {
    this.setState({ viewItemsProduct });
  }

  render() {
    const viewItemsProduct = this.state.viewItemsProduct;
    const products = this.state.products;
    const itemsPageOffset = this.state.itemsPageOffset;

    return (
      <div>
        <section className="product-list">
          <div className="grid-x grid-margin-x">
            {viewItemsProduct.map(product => (
              <Product
                key={product.id}
                product={product}
                addToCartHandler={this.props.addToCartHandler}
                removeFromCartHandler={this.props.removeFromCartHandler}
              />
            ))}
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
  getProducts: PropTypes.func.isRequired,
  addToCartHandler: PropTypes.func.isRequired,
  removeFromCartHandler: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  products: state.products.products,
  isFetching: state.products.fetching,
  error: state.products.error,
});

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(fetchProducts()),
  addToCartHandler: item => dispatch(addToCart(item)),
  removeFromCartHandler: item => dispatch(removeFromCart(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

