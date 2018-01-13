import React from 'react';
import PropTypes from 'prop-types';

import Header from 'Components/Header/Header';

const PageLayout = props => (
  <div>
    <Header />
    <div className="grid-container fluid">
      <div className="grid-x grid-margin-x">
        <main>{props.children}</main>
      </div>
    </div>
  </div>
);

PageLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PageLayout;
