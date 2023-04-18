import MediumArticles from '@/components/blog/MediumArticles';
import { StyledContainer, StyledSection } from '@/components/common/StyledUI';
import { useMediumFeed } from '@/services/Blog/hooks/useMediumFeed';
import { RssFeed } from '@/services/Blog/types';
import { useEffect, useState } from 'react';

const Blog = () => {
  const [rssFeed, setRssFeed] = useState<RssFeed>();

  useEffect(() => {
    const fetchRssFeed = async () => useMediumFeed('keitasekihara', 10);

    fetchRssFeed().then((rssFeed) => rssFeed && setRssFeed(rssFeed));
  }, []);

  if (!rssFeed) return <span>Loading...</span>;

  return (
    <StyledSection>
      <StyledContainer>
        <MediumArticles articles={rssFeed.articles} />
      </StyledContainer>
    </StyledSection>
  );
};

export default Blog;
