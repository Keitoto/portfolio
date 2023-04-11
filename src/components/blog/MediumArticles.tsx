import MediumArticleCard from '@/components/blog/MediumArticleCard';
import { Article } from '@/services/Blog/types';
import React, { FC } from 'react';

const MediumArticles: FC<{ articles: Article[] }> = ({ articles }) => {
  return (
    <div>
      {articles.map((article) => (
        <MediumArticleCard article={article} key={article.guid} />
      ))}
    </div>
  );
};

export default MediumArticles;
