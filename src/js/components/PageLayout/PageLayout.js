import React from 'react';
import PropTypes from 'prop-types';

import Header from 'Components/Header/Header';
import PageTitle from 'Components/PageTitle/PageTitle';
import BannerContainer from 'Components/BannerContainer/BannerContainer';
import BannerCarousel from 'Components/BannerCarousel/BannerCarousel';
import Footer from 'Components/Footer/Footer';
import SponsorList from 'Components/SponsorList/SponsorList';
import FilterList from 'Components/Filters/FilterList';
import FiltersSidebar from 'Components/Filters/FiltersSidebar';

const PageLayout = props => (
  <div>
    <Header />
    <PageTitle />
    <div className="container">
      <BannerContainer />
      <FilterList />
      <div className="grid-x">
        <FiltersSidebar />

        <main className="medium-8 large-9">{props.children}</main>

      </div>
    </div>
    <BannerCarousel />
    <SponsorList />
    <Footer />
  </div>
);

PageLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PageLayout;
