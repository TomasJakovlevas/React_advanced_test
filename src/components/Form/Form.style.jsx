import styled from 'styled-components';
import { mainColor } from '../common/colors';

export const StyledForm = styled.form`
  width: 80%;
  margin: 10px auto;

  display: flex;
  flex-direction: column;

  button {
    margin: 20px 0;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  label {
    padding: 5px 0;
  }

  input {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid grey;
    &:focus {
      border: none;
      outline: 2px solid ${mainColor};
    }
  }
`;
