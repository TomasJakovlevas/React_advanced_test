import React from 'react';

// Style
import { StyledButton, StyledIcon } from './SocialButton.style';

const SocialButton = ({ text, icon, theme }) => {
  return (
    <StyledButton theme={theme}>
      <StyledIcon>{icon}</StyledIcon>
      {text}
    </StyledButton>
  );
};

export default SocialButton;
