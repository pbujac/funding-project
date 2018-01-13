import React from 'react';
import banner from 'Images/banner/banner2.png';

const figureStyle = {
  backgroundImage: `url('${banner}')`,
};

const SmallBanner = () => (
  <figure className="banner-container__small medium-5 cell" style={figureStyle}>
    <figcaption className="banner-container__small__figcaption">
      <p className="banner-container__small__figcaption__category">Lifestyle</p>
      <p className="banner-container__small__figcaption__title">
        Fashion Collection
      </p>
      <button className="banner-container__small__figcaption__button">
        More info
      </button>
    </figcaption>
  </figure>
);

export default SmallBanner;
