import React from 'react';
const { PropTypes } = React;

const Icon = (props) => (
  <svg width="36" height="36" viewBox={props.viewBox} color={props.color}>
    <path d={props.icon} />
  </svg>
);

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default Icon;
