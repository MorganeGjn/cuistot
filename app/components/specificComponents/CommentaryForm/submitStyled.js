import styled from 'styled-components';
import theme, { animations } from '../../../utils/theme';

const Submit = styled.button`
  display: block;
  box-sizing: border-box;
  margin-top: 2%;
  margin-bottom: 2%;
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
  border: 2px solid ${theme.colors.cook};
  color: ${theme.colors.cook};
  &:active {
    background: ${theme.colors.white};
    color: ${theme.colors.cook};
  }
  &:hover {
    animation: 1s ${animations.pulseCook} ease-in;
  }
`;

export default Submit;
