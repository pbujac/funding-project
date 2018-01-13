import React from 'react';
import PropTypes from 'prop-types';

import Header from 'Components/Header/Header';
import PageTitle from 'Components/PageTitle/PageTitle';
import BannerContainer from 'Components/BannerContainer/BannerContainer';
import BannerCarousel from 'Components/BannerCarousel/BannerCarousel';

const PageLayout = props => (
  <div>
    <Header />
    <PageTitle />
    <div className="container">
      <BannerContainer />
      <main>{props.children}</main>
      <BannerCarousel />
    </div>
  </div>
);

PageLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PageLayout;
