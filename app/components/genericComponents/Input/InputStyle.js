import styled from 'styled-components';

const InputStyle = styled.div`
  display: inline-block;
  width: 100%;
  border: solid 2px #A9A9A9;
  borderRadius: 4px;
  margin-top:10px;
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
  `;

  export default InputStyle;
