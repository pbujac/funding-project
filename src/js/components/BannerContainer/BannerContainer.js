import React from 'react';
import LargeBanner from './LargeBanner';
import SmallBanner from './SmallBanner';

const BannerContainer = () => (
  <div className="banner-container">
    <LargeBanner />
    <SmallBanner />
  </div>
);

export default BannerContainer;
