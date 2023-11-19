import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: ${p => p.theme.spacing(4)};
  max-width:100%;
  width: 200px;
`;

export const Input = styled.input` 
  padding: ${p => p.theme.spacing(3)};
  margin-bottom: ${p => p.theme.spacing(3)};
  border-radius: ${p => p.theme.radii.lg};
  border: 1px solid ${p => p.theme.colors.secondary};
  outline: 0;
  background-color: ${p => p.theme.colors.white};
`;

export const Button = styled.button`
  padding: ${p => p.theme.spacing(2)};
  margin-top: ${p => p.theme.spacing(4)};
  font-size: 16px;
  border-radius: ${p => p.theme.radii.md};;
  border: 1px solid ${p => p.theme.colors.secondary};
  background-color: ${p => p.theme.colors.primary};
  cursor: pointer;
    &:hover {
    background-color: ${p => p.theme.colors.black};
    color: ${p => p.theme.colors.primary};
  } 
`;

export const Text = styled.p`
text-align: left;
color: ${p => p.theme.colors.white};
margin-top: ${p => p.theme.spacing(2)};;
  margin-bottom: ${p => p.theme.spacing(1)};;  
`;