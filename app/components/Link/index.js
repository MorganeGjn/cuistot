import React from 'react';

import styled, { css } from 'styled-components';
import { Link as RouterLink } from 'react-router';
import theme from '../../utils/theme';

const styles = css`
  color: ${theme.colors.gourmet};
  font-family: ${theme.fontFamily};
  text-decoration: none;
  margin: 0 0.5em;

  &:hover {
    text-decoration: underline;
    color: ${theme.colors.gourmetLighter};
  }
`;

const StyledLink = styled(({ ...props }) => (
  <RouterLink {...props} />
))`${styles}`;
const Anchor = styled.a`${styles}`;

const Link = ({ ...props }) => {
  if (props.to) {
    return <StyledLink {...props} />;
  }
  return <Anchor {...props} />;
};
export default Link;
