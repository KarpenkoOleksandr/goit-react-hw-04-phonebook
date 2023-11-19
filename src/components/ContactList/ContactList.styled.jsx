import styled from 'styled-components';

export const ContactItems = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${p => p.theme.spacing(3)};  
`;

export const Contact = styled.span` 
 margin-right: ${p => p.theme.spacing(2)}; 
 color: ${p => p.theme.colors.white};
`;

export const Button = styled.button` 
  padding: ${p => p.theme.spacing(2)} ${p => p.theme.spacing(3)};
  margin-left: ${p => p.theme.spacing(3)};  
  font-size: 14px;
  border-radius: ${p => p.theme.radii.md};;
  border: 1px solid ${p => p.theme.colors.secondary};
  background-color: {p => p.theme.colors.secondary};
    &:hover {
    background-color: ${p => p.theme.colors.accent};
    border: 1px solid ${p => p.theme.colors.primary};
  } 
`;