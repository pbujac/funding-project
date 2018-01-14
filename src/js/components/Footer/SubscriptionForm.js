import React from 'react';

const SubcscriptionForm = () => (
  <form className="footer__center__subscription-form">
    <fieldset>
      <legend className="footer__center__subscription-form__title">Subscribe to news</legend>
      <p>
        <input className="footer__center__subscription-form__input" type="email" placeholder="Email address" />
        <button className="footer__center__subscription-form__submit" type="submit">Submit</button>
      </p>
    </fieldset>
  </form>
);

export default SubcscriptionForm;
