import React from 'react';
import Slider from 'react-slick';
import banner from 'Images/banner/banner3.png';

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  vertical: true,
};

const BannerCarousel = () => (
  <div>
    <Slider {...sliderSettings}>
      <div>
        <img src={banner} alt="banner" />
      </div>
      <div>
        <img src={banner} alt="banner" />
      </div>
      <div>
        <img src={banner} alt="banner" />
      </div>
    </Slider>
  </div>
);

export default BannerCarousel;
