import React from 'react';

const Sponsor = sponsor => (
  <figure className="medium-3 cell">
    <img className="sponsors__image" href={sponsor.sponsor} alt="sponsor" />
  </figure>
);

export default Sponsor;
