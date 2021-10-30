import React, { useState } from 'react';
import Button from '../Button/Button';
import RegistrationValidation from '../renderProps/RegistrationValidation';

// Style
import { StyledForm, InputWrapper } from './Form.style';

// Component
import Input from './Input';

const Form = () => {
  // Hooks
  // -- state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Custom functions
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name, email, password);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <InputWrapper>
        <RegistrationValidation
          render={(validateInput) => {
            const input = validateInput(name);
            return (
              <Input
                label='Name'
                type='text'
                placeholder='Tomas Jakovlevas'
                value={name}
                action={(e) => setName(e.target.value)}
                id='name'
                input={input}
              />
            );
          }}
        />
      </InputWrapper>
      <InputWrapper>
        <Input
          label='Email'
          type='email'
          placeholder='tomas@gmail.com'
          value={email}
          action={(e) => setEmail(e.target.value)}
          id='email'
        />
      </InputWrapper>
      <InputWrapper>
        <Input
          label='Password'
          type='password'
          placeholder='*********'
          value={password}
          action={(e) => setPassword(e.target.value)}
          id='password'
        />
      </InputWrapper>
      <Button text='Submit' />
    </StyledForm>
  );
};

export default Form;
