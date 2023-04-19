import Link from 'next/link';
import styled from 'styled-components';

export const StyledButton = styled.a`
  background-color: ${({ theme: { color } }) => color.background};
  border: 0.2rem solid ${({ theme: { color } }) => color.primary};
  color: ${({ theme: { color } }) => color.primary};
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.8rem;
`;
export const StyledNextLink = styled(Link)`
  background-color: ${({ theme: { color } }) => color.background};
  border: 0.2rem solid ${({ theme: { color } }) => color.primary};
  color: ${({ theme: { color } }) => color.primary};
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.8rem;
`;

export const StyledContainer = styled.div`
  max-width: var(--container-width);
  width: 100%;
  margin: 0 auto;
`;

export const StyledSection = styled.section`
  padding: 3rem var(--space-side-section);
`;

export const StyledSectionHeading = styled.h1`
  font-size: 3.6rem;
  font-weight: bold;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 6rem;
  text-align: center;
  &::after {
    content: '';
    display: block;
    width: calc(100% - 4rem);
    height: 0.2rem;
    background-color: ${({ theme: { color } }) => color.primary};
    margin-top: 1.6rem;
  }
`;

export const StyledFitImage = styled.div`
  width: 100%;
  position: relative;
  &:before {
    content: '';
    display: block;
    padding-top: 56.25%;
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const StyledPageHeading = styled.h1`
  font-size: 4.8rem;
  line-height: 1.2;
  text-align: center;
  margin-bottom: 2rem;
`;

export const CenterContent = styled.div`
  text-align: center;
`;
