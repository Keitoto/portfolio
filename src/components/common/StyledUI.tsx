import styled from 'styled-components';

export const StyledButton = styled.a`
  background-color: ${({ theme: { color } }) => color.background};
  border: 2px solid ${({ theme: { color } }) => color.primary};
  color: ${({ theme: { color } }) => color.primary};
  font-weight: 600;
`;
