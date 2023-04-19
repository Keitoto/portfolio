import {
  StyledSection,
  StyledContainer,
  CenterContent,
  StyledSectionHeading,
} from '@/components/common/UI/StyledUI';
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <Contact />
    </footer>
  );
};

const Contact = () => {
  return (
    <StyledSection id="contact">
      <StyledContainer>
        <CenterContent>
          <StyledSectionHeading as="h2">Get in touch</StyledSectionHeading>
        </CenterContent>
      </StyledContainer>
    </StyledSection>
  );
};

export default Footer;
