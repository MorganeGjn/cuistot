import styled from 'styled-components';
import theme from '../../../utils/theme';
import { media } from '../../../utils/media';

const Form = styled.form`
  ${media.lg`
    width: 60%;
    margin-right: auto;
    margin-left: auto;
  `};
  ${media.md`
    width: 80%;
    margin-right: auto;
    margin-left: auto;
  `};
  ${media.sm`
    width: 90%;
    margin-right: auto;
    margin-left: auto;
  `};
  ${media.xs`
    width: 100%
  `};
  width: 100%;
  border: 1px solid #d0d0d0;
  padding: 2%;
`;

export default Form;
