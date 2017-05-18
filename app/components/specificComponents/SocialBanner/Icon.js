import React from 'react';
const { PropTypes } = React;

const Icon = (props) => (
  <svg width="32" height="32" viewBox={props.viewBox}>
    <path d={props.icon} />
  </svg>
);

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default Icon;
