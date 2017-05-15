import styled from 'styled-components';
import theme from '../../utils/theme';

const Price = styled.div`
  position: relative;
  bottom: 180px;
  left: 100px;
  border: 2px solid ${theme.colors.gourmet};
  border-radius: 4px;
  background: ${theme.colors.white};
  padding: 0.25em 0.25em;
`;

export default Price;
