import React from 'react';
import PropTypes from 'prop-types';

const Icon = (props) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox={props.viewBox}
    color={props.color}
  >
    <path d={props.icon} />
  </svg>
);

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  viewBox: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

Icon.defaultProps = {
  width: 32,
  height: 32,
  color: '#000',
};

export default Icon;
