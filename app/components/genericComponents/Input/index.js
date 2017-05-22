import React from 'react';
import PropTypes from 'prop-types';
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
  meta: PropTypes.object,
  input: PropTypes.object,
};

export default Input;
