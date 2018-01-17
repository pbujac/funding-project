import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

export default class Product extends Component {
  constructor(props) {
    super(props);
    const product = props.product;
    this.state = {
      product,
      isAdded: false,
    };

    this.incrementCounter = this.updateCounter.bind(this, 1);
    this.decrementCounter = this.updateCounter.bind(this, -1);
    this.addToCartHandler = this.addToCartHandler.bind(this);
    this.removeFromCartHandler = this.removeFromCartHandler.bind(this);
  }

  updateCounter(count) {
    const product = this.state.product;
    product.quantity += count;

    this.setState({ product });
  }

  addToCartHandler() {
    const product = this.state.product;

    this.setState({ product, isAdded: true });
    this.props.addToCartHandler(Object.assign({}, this.state.product));
  }

  removeFromCartHandler() {
    const product = this.state.product;
    product.quantity = 1;
    this.setState({ product, isAdded: false });
    this.props.removeFromCartHandler(Object.assign({}, this.state.product));
  }


  render() {
    const product = this.state.product;
    const productGrid = this.props.productGrid;

    return (
      <article className={`product cell ${productGrid ? 'medium-6 large-4' : 'small-12'}`}>
        <header className="product__header">
          <div className={product.isSale ? 'product__header__sale--active' : 'product__header__sale'}>sale</div>
          <figure className="product__header__figure">
            <img className="product__header__figure__image" src={product.image} alt="product" />
          </figure>
        </header>

        <main className="product__main">
          <p className="product__main__title">{product.name}</p>

          <div className="product__main__price">
            <p className={product.discountPrice
              ? 'product__main__price__discount'
              : 'product__main__price__discount--no-discount'}
            >
              {product.currency} {product.discountPrice} USD
            </p>
            <p className={`product__main__price__real ${product.discountPrice
              ? ' product__main__price__real--has-discount'
              : ''}`}
            >
              {product.currency}  {product.price} USD
            </p>
          </div>

          <div className="product__main__items">
            <Counter
              product={product}
              decrementCounter={this.decrementCounter}
              incrementCounter={this.incrementCounter}
            />
            {!this.state.isAdded ? (
              <button className="product__main__items__submit" onClick={this.addToCartHandler}>
                <span className="product__main__items__submit__add">+</span>
                Add To Cart
              </button>
            ) : (
              <button className="product__main__items__submit product__main__items__submit--remove" onClick={this.removeFromCartHandler}>
                <span className="product__main__items__submit__add">-</span>
                  Remove All
              </button>
              )}
          </div>
        </main>
      </article>
    );
  }
}
Product.propTypes = {
  product: PropTypes.object.isRequired,
  productGrid: PropTypes.bool.isRequired,
  addToCartHandler: PropTypes.func.isRequired,
  removeFromCartHandler: PropTypes.func.isRequired,
};
