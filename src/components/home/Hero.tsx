import { StyledContainer } from '@/components/common/UI/StyledUI';
import React from 'react';
import styled from 'styled-components';
import SouthIcon from '@mui/icons-material/South';
import ScrollLink from '@/components/common/UI/ScrollLink';

const Hero = () => {
  return (
    <Section>
      <Container>
        <Heading>
          Hi, I'm <span>Keita Sekihara</span>.<br />
          Front-End, React.js Developer
        </Heading>
        <HeroButtons>
          <PrimaryButton href="#works">
            View Works<SouthIcon></SouthIcon>
          </PrimaryButton>
          <SecondaryButton href="#skills">
            View Skills<SouthIcon></SouthIcon>
          </SecondaryButton>
        </HeroButtons>
        <Lead></Lead>
      </Container>
    </Section>
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

const PrimaryButton = styled(ScrollLink)`
  padding: 1rem 2.4rem;
  font-size: 1.6rem;
  margin: 0 1rem;

  svg {
    margin-left: 1rem;
  }
`;
const SecondaryButton = styled(PrimaryButton)`
  background-color: ${({ theme: { color } }) => color.background};
  border-color: ${({ theme: { color } }) => color.text.normal};
  color: ${({ theme: { color } }) => color.text.normal};
`;

const HeroButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.6rem;
`;
// Hi, I'm Keita Sekihara,
// Front-End React.js
// Web Developer
