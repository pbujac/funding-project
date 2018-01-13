import React from 'react';
import Social from './Social';
import Logo from 'Components/Logo';
import ContactDetails from './ContactDetails';
import CreditCards from './CreditCards';
import SubscriptionForm from 'Components/SubscriptionForm';

const Footer = () => (
  <footer>
    <Logo />
    <Social />
    <SubscriptionForm />
    <ContactDetails />
    <CreditCards />
  </footer>
);

export default Footer;
