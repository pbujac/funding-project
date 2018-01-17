import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = { isSelected: false };
  }

  toggleAccordionChange() {
    this.setState(({ isSelected }) => ({ isSelected: !isSelected }));
  }

  render() {
    const { isSelected } = this.state;
    return (
      <section className="accordion">
        <header className="accordion__title">
          <button className="accordion__title__name" onClick={() => this.toggleAccordionChange()}>
            <span className={`accordion__title__arrow ${isSelected ? 'accordion__title__arrow--show' : ''}`} />
            {this.props.title}
            <span className={`accordion__title__btn-close ${isSelected ? 'accordion__title__btn-close--show' : ''}`} >x</span>
          </button>
        </header>

        <div className={`accordion__body ${isSelected ? 'accordion__body--selected' : ''}`}>
          {this.props.children}
        </div>
      </section>
    );
  }
}

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Accordion;
