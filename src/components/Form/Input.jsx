import React from 'react';

// Style
import { StyledLabel, StyledInput } from './Input.style';

const Input = ({ label, type, placeholder, value, action, id }) => {
  return (
    <>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={action}
      />
    </>
  );
};

export default Input;
