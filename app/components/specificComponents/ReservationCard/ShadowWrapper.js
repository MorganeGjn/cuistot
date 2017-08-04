import styled from 'styled-components';

const ShadowWrapper = styled.div`
  position: relative;
  display: inline-block;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 500ms ease;
  &::after {
    content: "";
    border-radius: 5px;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: all 500ms ease;
  }
  &:hover {
    transform: scale(1, 1);
  }
  &:hover::after {
      opacity: 1;
  }
`;

export default ShadowWrapper;
