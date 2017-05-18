import React from 'react';
import Wrapper from './Wrapper';

function Input(props) {
  return (
    <Wrapper>
      <input {...props.input} />
      {props.meta.touched &&
        props.meta.error &&
        <span>{props.meta.error}</span>}
    </Wrapper>
  );
}

Input.propTypes = {
  meta: React.PropTypes.object,
  input: React.PropTypes.object,
};

export default Input;
