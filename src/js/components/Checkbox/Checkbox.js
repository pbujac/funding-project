import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {
  constructor() {
    super();
    this.state = { isChecked: false };
    this.toggleCheckboxChange = this.toggleCheckboxChange.bind(this);
  }

  componentWillReceiveProps(props) {
    if (props.reset) {
      this.setState({ isChecked: false });
    }
  }

  toggleCheckboxChange() {
    const { toggleFilter, filterObj } = this.props;

    this.setState(({ isChecked }) => ({ isChecked: !isChecked }));
    toggleFilter(filterObj);
  }

  render() {
    const { filterObj } = this.props;
    const { isChecked } = this.state;

    return (
      <button
        className={`checkbox ${isChecked ? 'checkbox--active' : ''}`}
        onClick={this.toggleCheckboxChange}
      >
        <input
          type="checkbox"
          className="checkbox__input"
          value={filterObj.name}
          checked={isChecked}
        />
        {filterObj.name}
      </button>
    );
  }
}

Checkbox.propTypes = {
  reset: PropTypes.bool.isRequired,
  filterObj: PropTypes.object.isRequired,
  toggleFilter: PropTypes.func.isRequired,
};

export default Checkbox;
