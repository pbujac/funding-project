import React from 'react';
import Slider from 'react-slick';
import figure1 from 'Images/banner/banner3.png';
import figure2 from 'Images/banner/banner1.png';
// import FigureSlide from './FigureSlide';

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoPlay: true,
  arrows: false,
};

const BannerCarousel = () => (
  <section className="banner-carousel">
    <Slider {...sliderSettings}>
      <figure className="banner-carousel__figure">
        <img
          className="banner-carousel__figure__img"
          src={figure1}
          alt="banner"
        />
        <figcaption className="banner-carousel__figure__caption">
          <p className="banner-carousel__figure__caption__category">
            New Product
          </p>
          <p className="banner-carousel__figure__caption__title">
            The new Collection <br /> of Summers
          </p>
        </figcaption>
      </figure>

      <figure className="banner-carousel__figure">
        <img
          className="banner-carousel__figure__img"
          src={figure2}
          alt="banner"
        />
        <figcaption className="banner-carousel__figure__caption">
          <p className="banner-carousel__figure__caption__category">
            New Product
          </p>
          <p className="banner-carousel__figure__caption__title">
            The new Collection <br /> of Winter
          </p>
        </figcaption>
      </figure>
    </Slider>
  </section>
);

export default BannerCarousel;
