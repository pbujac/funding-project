import React from 'react';
import Social from './Social';
import Logo from './Logo';
import NavFooter from './NavFooter';
import ContactDetails from './ContactDetails';
import CreditCards from './CreditCards';
import SubscriptionForm from './SubscriptionForm';

const Footer = () => (
  <footer className="footer">
    <div className=" grid-container">
      <div className="grid-x grid-margin-x grid-padding-x">
        <div className="footer__left medium-12 large-3 cell">
          <Logo />
          <Social />
        </div>
        <div className="footer__center medium-12  large-6 cell">
          <NavFooter />
          <SubscriptionForm />
        </div>
        <div className="footer__right medium-12  large-3 cell">
          <ContactDetails />
          <CreditCards />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
