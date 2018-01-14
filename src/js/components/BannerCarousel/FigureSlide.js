import React from 'react';

const FigureSlider = figure => (
  <figure className="banner-carousel__figure">
    <img
      className="banner-carousel__figure__img"
      src={figure.figure}
      alt="banner"
    />
    <figcaption className="banner-carousel__figure__caption">
      <p className="banner-carousel__figure__caption__category">New Product</p>
      <p className="banner-carousel__figure__caption__title">
        The new Collection <br /> of Summers
      </p>
    </figcaption>
  </figure>
);

export default FigureSlider;
