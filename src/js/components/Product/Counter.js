import React from 'react';

const Counter = product => (
  <div className="product__main__items__counter">
    <button
      className="product__main__items__counter__button"
      disabled={product.product.quantity <= 1}
      onClick={product.decrementCounter}
    >
      -
    </button>
    <p className="product__main__items__counter__quantity">{product.product.quantity}</p>
    <button
      className="product__main__items__counter__button"
      disabled={product.product.quantity >= 100}
      onClick={product.incrementCounter}
    >
      +
    </button>
  </div>
);

export default Counter;
