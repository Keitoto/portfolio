import {
  StyledSection,
  StyledContainer,
  CenterContent,
  StyledSectionHeading,
} from '@/components/common/UI/StyledUI';
import React from 'react';

const Skills = () => {
  return (
    <StyledSection id="skills">
      <StyledContainer>
        <CenterContent>
          <StyledSectionHeading as="h1">Skills</StyledSectionHeading>
        </CenterContent>
      </StyledContainer>
    </StyledSection>
  );
};

export default Skills;
