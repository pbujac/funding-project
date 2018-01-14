import React, { Component } from 'react';
import Product from 'Components/Product/Product';
import product from 'Images/products/item1.png';

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="product-list grid-x grid-margin-x">
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
      </section>
    );
  }
}
