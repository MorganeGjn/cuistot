import styled from 'styled-components';
import theme from '../../../utils/theme';

const Textarea = styled.textarea`
  width: 100%;
  display: block;
  font-size: 16px;
  border: 1px solid grey;
  border-radius: 4px;
  padding: 1%;
  box-shadow: inset 0 5px 5px rgba(0, 0, 0, .075);
  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  &:focus {
    border-radius: 4px;
    border-color: ${theme.colors.cookLighter};
    outline: none;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075),
      0 0 8px rgba(102, 175, 233, .6);
  }
`;

export default Textarea;
