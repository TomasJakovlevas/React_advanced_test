import React from 'react';

// Style
import { SyledFormImage, CenteredImg, Logo, StyledPar } from './FormImage.syle';

const FormImage = () => {
  return (
    <SyledFormImage>
      <Logo>
        <img
          src='https://raw.githubusercontent.com/JoyShaheb/Project-image-repo/e2aa9d5d409b28efe7040e4b92da891c64ee23ce/Form-Validation/images/logo.svg'
          alt='B'
        />
      </Logo>

      <CenteredImg>
        <img
          src='https://raw.githubusercontent.com/JoyShaheb/Project-image-repo/e2aa9d5d409b28efe7040e4b92da891c64ee23ce/Form-Validation/images/illustration.svg'
          alt='guyWithPhone'
        />
      </CenteredImg>
      <StyledPar>Start for free & Get Attractive offers Today!</StyledPar>
    </SyledFormImage>
  );
};

export default FormImage;
