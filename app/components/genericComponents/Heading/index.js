import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import theme from '../../../utils/theme';

export const fontSize = ({ level, big }) => {
  let font = 0.75 + 1 / level; // eslint-disable-line
  if (big) font *= 2;
  return `${font}rem`;
};

const styles = css`
  font-weight: 500;
  font-size: ${fontSize};
  margin: 0;
  margin-top: 0.85714em;
  margin-bottom: 0.57142em;
  color: ${theme.colors.white};
`;

const Heading = styled(({ level, big, children, ...props }) => // eslint-disable-line no-unused-vars
  React.createElement(`h${level}`, props, children)
)`${styles}`;

Heading.propTypes = {
  level: PropTypes.number,
  big: PropTypes.bool,
};

Heading.defaultProps = {
  level: 1,
  big: false,
};

export default Heading;
