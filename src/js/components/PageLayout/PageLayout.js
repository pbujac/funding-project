import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const PageLayout = props => (
  <div>
    <Header />
    <main>{props.children}</main>
    <Footer />
  </div>
);

PageLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PageLayout;
