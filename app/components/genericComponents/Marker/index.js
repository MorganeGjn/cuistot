import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';

function Marker(props) {
  return <Wrapper>{props.item}</Wrapper>;
}

Marker.propTypes = {
  item: PropTypes.any,
};

export default Marker;
