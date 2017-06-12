import styled from 'styled-components';
import theme from '../../../utils/theme';

const GiftCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  align-items: center;
  border: 1px solid ${theme.colors.grayDarker};
  border-radius: 4px;
`;

export default GiftCardWrapper;
