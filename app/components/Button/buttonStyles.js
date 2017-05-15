import { css } from 'styled-components';
import theme from '../../utils/theme';

const buttonStyles = css`
  display: inline-block;
  box-sizing: border-box;
  padding: 0.25em 2em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-weight: bold;
  font-size: 16px;
  border: 2px solid ${theme.colors.gourmet};
  color: ${theme.colors.gourmet};

  &:active {
    background: ${theme.colors.white};
    color: ${theme.colors.gourmetLighter};
  }
`;

export default buttonStyles;
