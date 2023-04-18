import { StyledContainer } from '@/components/common/StyledUI';
import React from 'react';
import styled from 'styled-components';

const Hero = () => {
  return (
    <>
      <Section>
        <Container>
          <Heading>
            Hi, I'm <span>Keita Sekihara</span>,
          </Heading>
          <Lead>a React Front-end developer</Lead>
        </Container>
      </Section>
      <Section>
        <BigHeadingContainer>
          <BigHeading>
            Hi, I'm <span>Keita Sekihara</span>,<br />
            Front-End <br /> React.js Developer
          </BigHeading>
        </BigHeadingContainer>
      </Section>
    </>
  );
};

export default Hero;

const Section = styled.section`
  width: 100vw;
  height: calc(100vh - var(--header-height) * 2);
  margin-bottom: var(--header-height);
`;
const Container = styled(StyledContainer)`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Heading = styled.h1`
  font-size: 4.8rem;
  span {
    font-size: 4.8rem;
    color: ${({ theme: { color } }) => color.primary};
  }
`;
const Lead = styled.p`
  font-size: 4.8rem;
`;

const BigHeadingContainer = styled(StyledContainer)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BigHeading = styled.h1`
  font-size: 6rem;
  span {
    color: ${({ theme: { color } }) => color.primary};
    font-size: 6rem;
  }
`;

// Hi, I'm Keita Sekihara,
// Front-End React.js
// Web Developer
