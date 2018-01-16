import React from 'react';

const Sponsor = sponsor => (
  <figure className="large-3 medium-6 small-12 cell">
    <img className="sponsors__image" src={sponsor.sponsor} alt="sponsor" />
  </figure>
);

export default Sponsor;
