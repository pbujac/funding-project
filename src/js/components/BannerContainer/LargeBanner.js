import React from 'react';
import banner from 'Images/banner/banner1.png';

const figureStyle = {
  backgroundImage: `url('${banner}')`,
};

const LargeBanner = () => (
  <figure className="banner-container__large medium-7 cell" style={figureStyle}>
    <figcaption className="banner-container__large__figcaption">
      <p className="banner-container__large__figcaption__category">Lifestyle</p>
      <p className="banner-container__large__figcaption__title">
        New now: Striped cotton
      </p>
      <button className="banner-container__large__figcaption__button">
        More info
      </button>
    </figcaption>
  </figure>
);

export default LargeBanner;
