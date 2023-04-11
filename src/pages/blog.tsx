import MediumArticles from '@/components/blog/MediumArticles';
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
    <div>
      <MediumArticles articles={rssFeed.articles} />
    </div>
  );
};

export default Blog;
