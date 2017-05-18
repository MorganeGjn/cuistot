import React from 'react';
import PropTypes from 'prop-types';

const Icon = (props) => (
  <svg width={props.width} height={props.height} viewBox={props.viewBox}>
    <path d={props.icon} />
  </svg>
);

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  viewBox: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};

Icon.defaultProps = {
  width: 32,
  height: 32,
};

export default Icon;
