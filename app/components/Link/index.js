import React from 'react';

import styled, { css } from 'styled-components';
import { Link as RouterLink } from 'react-router';

const styles = css`
  color: #2ABA66;
  font-family: Helvetica, Arial, sans-serif;
  text-decoration: none;
  margin: 0 0.5em;

  &:hover {
    text-decoration: underline;
    color: #2ECC71;
  }
`;

const StyledLink = styled(({ ...props }) => <RouterLink {...props} />)`${styles}`;
const Anchor = styled.a`${styles}`;

const Link = ({ ...props }) => {
  if (props.to) {
    return <StyledLink {...props} />;
  }
  return <Anchor {...props} />;
};
export default Link;
