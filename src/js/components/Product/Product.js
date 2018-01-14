import React from 'react';

const Product = product => (
  <article className="product product-small large-4 medium-6 small-12 cell">
    <header className="product__header">
      <figure className="product__figure">
        <img className="product__figure__image" href={product.product} alt="product" />
      </figure>
    </header>
    <main className="product__main">
      <p className="product__title">Essential cotton-blend</p>
      <div className="product__price">
        <p className="product__price__real product__price__real--has-discount">
          $100 USD
        </p>
        <p className="product__price__discount"> $200 USD</p>
      </div>
      <form className="product__form">
        <div className="product__form__items">
          <button className="product__form__items__button">+</button>
          <input
            className="product__form__items__input"
            disabled
            value="2"
            type="number"
          />
          <button className="product__form__items__button">-</button>
        </div>
        <button className="product__form__submit">
          <span className="product__form__submit__add">+</span> Add To Card
        </button>
      </form>
    </main>
  </article>
);

export default Product;
