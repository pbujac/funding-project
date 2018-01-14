import React from 'react';
import banner from 'Images/products/item1.png';

const figureStyle = {
  backgroundImage: `url('${banner}')`,
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  backgroundPosition: '50% 0',
  backgroundSize: '2250px',
  width: '100%',
  height: '100%',
};

const Banner = () => (
  <figure style={figureStyle}>
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

export default Banner;
