/**
 *
 * Image.react.js
 *
 * Renders an image, enforcing the usage of the alt="" tag
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledImage = styled('img')`
  height: auto;
  width: 100%;
`;

function Image(props) {
  return <StyledImage {...props} />;
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
