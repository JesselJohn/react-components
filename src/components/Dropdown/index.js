import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import for Page
import Label from '../Label';
import Input from '../Input';
import {
  onInpValChange,
  onUserInput,
  toggleDropdownDisplay,
  renderListItems,
} from './methods';
import './styles/_index.scss';

let onInpValChangeFn;
let onUserInputFn;
let toggleDropdownDisplayFn;
let renderListItemsFn;

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inpVal: '',
      isDropdownActive: false, // eslint-disable-line react/no-unused-state
      listNode: [], // eslint-disable-line react/no-unused-state
      listNodeItem: [], // eslint-disable-line react/no-unused-state
    };

    this.inputId = `${Math.round(Math.random() * (10 ** 10))}`;

    onInpValChangeFn = onInpValChange.bind(this);
    onUserInputFn = onUserInput.bind(this);
    toggleDropdownDisplayFn = toggleDropdownDisplay.bind(this);
    renderListItemsFn = renderListItems.bind(this);
  }

  render() {
    const {
      inpVal,
    } = this.state;

    const {
      id,
      className,
      selectedValue,
      inpList,
      getSelection,
      renderList,
      ...otherProps
    } = this.props;

    return (
      <div className={`nwc-dropdown-container ${className}`}>
        <Label
          className="nwc-dropdown"
          htmlFor={id || this.inputId}
          {...otherProps}
        >
          {selectedValue}
          <Input
            id={id || this.inputId}
            labelClassName="nwc-dropdown-label"
            className="nwc-inp-hide nwc-inp-dash nwc-inp-sm"
            placeholder="Enter text"
            value={inpVal}
            onChange={onInpValChangeFn}
            onKeyDown={onUserInputFn}
            onFocus={() => { toggleDropdownDisplayFn(true); }}
            onBlur={() => { toggleDropdownDisplayFn(false); }}
          />
        </Label>
        {renderListItemsFn(inpVal, inpList, renderList)}
      </div>
    );
  }
}

Dropdown.defaultProps = {
  id: null,
  className: '',
  getSelection: () => {},
};

Dropdown.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  selectedValue: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]).isRequired,
  inpList: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  getSelection: PropTypes.func,
  renderList: PropTypes.func.isRequired,
  // children: PropTypes.oneOfType([
  //   PropTypes.arrayOf(PropTypes.node),
  //   PropTypes.node,
  // ]),
};

export default Dropdown;