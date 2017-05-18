import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
  width: 100%;
  margin: 0;
  border-radius: 2px;

  &[type=checkbox], &[type=radio] {
    display: inline-block;
    border: 0;
    border-radius: 0;
    width: auto;
    height: auto;
    margin: 0 0.2rem 0 0;
  }
`;

export default Wrapper;
