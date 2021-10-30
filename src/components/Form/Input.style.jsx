import styled from 'styled-components';
import { mainColor } from '../common/colors';

export const StyledLabel = styled.label`
  padding: 5px 0;
`;
export const StyledInput = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid grey;
  &:focus {
    border: none;
    outline: 2px solid ${mainColor};
  }
`;
