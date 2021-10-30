import React from 'react';
import Form from '../Form/Form';
import FormImage from '../FormImage/FormImage';
import Hero from '../Hero/Hero';

// Style
import { StyledRegistrationForm, FormWrapper } from './RegistrationForm.style';

const RegistrationForm = () => {
  return (
    <StyledRegistrationForm>
      <FormImage />
      <FormWrapper>
        <Hero />
        <h3>Or</h3>
        <Form />
      </FormWrapper>
    </StyledRegistrationForm>
  );
};

export default RegistrationForm;
