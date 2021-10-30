import React from 'react';

import SocialButton from '../Button/SocialButton';

// icons
import { googleIcon, facebookIcon } from '../FontAwesom/icons';

// colors
import { faceBookTheme } from '../common/colors';

// Style
import {
  StyledHero,
  StyledH2,
  StyledSpan,
  ButtonContainer,
} from './Hero.style';

const Hero = () => {
  return (
    <StyledHero>
      <StyledH2>Get Started</StyledH2>
      <p>Altready have an accouunt?</p>
      <StyledSpan>Log In</StyledSpan>
      <ButtonContainer>
        <SocialButton icon={googleIcon} text='sign up' />

        <SocialButton
          icon={facebookIcon}
          theme={faceBookTheme}
          text='sign up'
        />
      </ButtonContainer>
    </StyledHero>
  );
};

export default Hero;
