import React from 'react';
import Wrapper from './Wrapper';

function Marker(props) {
  return <Wrapper>{props.item}</Wrapper>;
}

Marker.propTypes = {
  item: React.PropTypes.any,
};

export default Marker;
