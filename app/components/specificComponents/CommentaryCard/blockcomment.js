import styled from 'styled-components';
import theme from '../../../utils/theme';

const BlockComment = styled.div`
  border-top: 2px solid ${theme.colors.cookLighter};
  text-align: left;
  padding: 2%;
  margin-bottom: 2%;
  width: 80%;
  order: 0;
  flex: 0 1 auto;
  align-self: auto;
`;

export default BlockComment;
