import styled from 'styled-components';

export const StyledButton = styled.a`
  background-color: ${({ theme: { color } }) => color.background};
  border: .2rem solid ${({ theme: { color } }) => color.primary};
  color: ${({ theme: { color } }) => color.primary};
  font-weight: 600;
  cursor: pointer;
`;

export const StyledContainer = styled.div`
  max-width: var(--container-width);
  width: 100%;
  margin: 0 auto;
`;

export const StyledSection = styled.section`
  padding: 3rem var(--space-side-section);
`

export const StyledHeading = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
`