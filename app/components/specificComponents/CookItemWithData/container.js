import styled from 'styled-components';
import theme from '../../../utils/theme';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: ${props => props.wrap};
  justify-content: space-around;
  align-items: stretch;
  flex: 1;
`;

export default Container;
