import React from 'react';
const { PropTypes } = React;

const SocialIcon = (props) => (
  <svg width="32" height="32" viewBox={props.viewBox}>
    <path d={props.icon} />
  </svg>
);

SocialIcon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default SocialIcon;
