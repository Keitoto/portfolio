import { MediumArticleList } from '@/components/blog';
import {
  CenterContent,
  StyledContainer,
  StyledSection,
  StyledSectionHeading,
} from '@/components/common/UI/StyledUI';
import { useMediumFeed } from '@/services/blog/hooks/useMediumFeed';
import { RssFeed } from '@/services/blog/types';
import { useEffect, useState } from 'react';

const BlogPage = () => {
  const [rssFeed, setRssFeed] = useState<RssFeed>();

  useEffect(() => {
    const fetchRssFeed = async () => {
      const res = await useMediumFeed('keitasekihara', 10);
      console.log(res);
    };
    fetchRssFeed();
    // try {
    //   const res = await fetchRssFeed();
    // } catch (error) {

    // }
    // fetchRssFeed().then((rssFeed) => rssFeed && setRssFeed(rssFeed));
  }, []);

  if (!rssFeed)
    return (
      <StyledSection>
        <StyledContainer>
          <StyledSectionHeading as="h1">Blog</StyledSectionHeading>
          <span>Loading...</span>
        </StyledContainer>
      </StyledSection>
    );

  return (
    <StyledSection>
      <StyledContainer>
        <CenterContent>
          <StyledSectionHeading as="h1">Blog</StyledSectionHeading>
        </CenterContent>
        <MediumArticleList articles={rssFeed.articles} />
      </StyledContainer>
    </StyledSection>
  );
};

export default BlogPage;
