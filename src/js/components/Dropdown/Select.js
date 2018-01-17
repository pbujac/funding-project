import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  constructor() {
    super();
    this.state = { selectValue: {} };
    this.onSelectChange = this.onSelectChange.bind(this);
  }

  componentWillMount() {
    this.setState({ selectedValue: this.props.defaultOption });
  }

  componentWillReceiveProps(props) {
    if (props.reset) {
      this.setState({ selectedValue: this.props.defaultOption });
    }
  }

  onSelectChange(e) {
    const selectedValue = e.target.value;
    this.setState({ selectedValue });
    this.props.handleSelectChange(selectedValue);
  }

  render() {
    const defaultValue = this.state.selectedValue;

    return (
      <div className="select">
        <select
          className="filter-list__item__select"
          value={defaultValue}
          onChange={this.onSelectChange}
        >
          <option disabled>{defaultValue}</option>
          {this.props.items.map(item =>
            <option key={item.id} value={item.name}>{item.name}</option>)}
        </select>
      </div>
    );
  }
}

Select.propTypes = {
  reset: PropTypes.bool.isRequired,
  defaultOption: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  handleSelectChange: PropTypes.func.isRequired,
};

export default Select;
