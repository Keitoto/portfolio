import { StyledButton, StyledContainer } from '@/components/common/StyledUI';
import React from 'react';
import styled from 'styled-components';
import SouthIcon from '@mui/icons-material/South';

const Hero = () => {
  return (
    <>
      <Section>
        <Container>
          <Heading>
            Hi, I'm <span>Keita Sekihara</span>,<br />
            Front-end, React.js Developer
          </Heading>
          <HeroButtons>
            <PrimaryButton href="#works">
              Works<SouthIcon></SouthIcon>
            </PrimaryButton>
            <SecondaryButton href="#skills">
              Skills<SouthIcon></SouthIcon>
            </SecondaryButton>
          </HeroButtons>
          <Lead></Lead>
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
  line-height: 1.2;
  text-align: center;
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

const PrimaryButton = styled(StyledButton)`
  padding: 1rem 2rem;
  font-size: 1.8rem;
  margin: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    margin-left: 1rem;
  }
`;
const SecondaryButton = styled(PrimaryButton)`
  background-color: transparent;
  border-color: ${({ theme: { color } }) => color.text.normal};
  color: ${({ theme: { color } }) => color.text.normal};
`;

const HeroButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;
// Hi, I'm Keita Sekihara,
// Front-End React.js
// Web Developer
