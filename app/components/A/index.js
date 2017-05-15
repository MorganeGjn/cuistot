/**
 * A link to a certain page, an anchor tag
 */

import styled from 'styled-components';
import theme from '../../utils/theme';

const A = styled.a`
  color: ${theme.colors.gourmet};
  text-decoration: none;
  &:hover {
    color: ${theme.colors.gourmet};
  }
`;

export default A;
