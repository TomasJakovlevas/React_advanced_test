import React from 'react';

import { StyledButton } from './Button.style';

const Button = ({ text, action }) => {
  return <StyledButton onClick={action}>{text}</StyledButton>;
};

export default Button;
