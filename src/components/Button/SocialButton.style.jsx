import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 5px 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.theme ? props.theme.background : 'white'};
  color: ${(props) => (props.theme ? props.theme.color : 'black')};
  border: 2px solid grey;
  border-radius: 5px;

  cursor: pointer;
`;

export const StyledIcon = styled.span`
  margin: 0 5px;
  font-size: 20px;
`;
