import React from 'react';
import Sponsor from './Sponsor';

import sponsor1 from 'Images/sponsor/sponsor1.png';
import sponsor2 from 'Images/sponsor/sponsor2.png';
import sponsor3 from 'Images/sponsor/sponsor3.png';
import sponsor4 from 'Images/sponsor/sponsor4.png';

const SponsorList = () => (
  <section className="sponsors grid-container">
    <div className="grid-x">
      <Sponsor sponsor={sponsor1} />
      <Sponsor sponsor={sponsor2} />
      <Sponsor sponsor={sponsor3} />
      <Sponsor sponsor={sponsor4} />
    </div>
  </section>
);

export default SponsorList;
