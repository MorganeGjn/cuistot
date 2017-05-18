import { css } from 'styled-components';
import theme, { animations } from '../../../utils/theme';

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
  box-shadow: 0 0 0 rgba(204,169,44, 0.7);
  &:active {
    background: ${theme.colors.white};
    color: ${theme.colors.gourmetLighter};
  }
  &:hover {
    animation: 1s ${animations.pulse} ease-in;
  }
  &:focus{
    outline: 0;
    animation: 1s ${animations.pulse} ease-in;
  }
`;

export default buttonStyles;
