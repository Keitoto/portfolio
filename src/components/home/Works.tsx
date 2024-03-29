import {
  CenterContent,
  StyledContainer,
  StyledSection,
  StyledSectionHeading,
} from '@/components/common/UI/StyledUI';
import { WorksList } from '@/components/works';
import React from 'react';

const Works = () => {
  return (
    <StyledSection id="works">
      <StyledContainer>
        <CenterContent>
          <StyledSectionHeading as="h2">Works</StyledSectionHeading>
        </CenterContent>
        <WorksList />
      </StyledContainer>
    </StyledSection>
  );
};

export default Works;
