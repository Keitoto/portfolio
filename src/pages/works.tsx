import {
  StyledSection,
  StyledContainer,
  CenterContent,
  StyledSectionHeading,
} from '@/components/common/UI/StyledUI';
import { WorksList } from '@/components/works';

const WorksPage = () => {
  return (
    <StyledSection>
      <StyledContainer>
        <CenterContent>
          <StyledSectionHeading as="h1">Works</StyledSectionHeading>
        </CenterContent>
        <WorksList />
      </StyledContainer>
    </StyledSection>
  );
};

export default WorksPage;
