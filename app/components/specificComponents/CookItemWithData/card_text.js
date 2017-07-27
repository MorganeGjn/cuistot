import styled from 'styled-components';
import theme from '../../../utils/theme';

const Card_text = styled.div`
  color: ${theme.colors.cook};
  font-size: 20px;
  font-style: italic;
  text-align: center;
  flex-basis: 80%;
  max-width: calc(100% - 30px);
`;

export default Card_text;
