import { MediumArticleCard } from '@/components/blog';
import { Article } from '@/services/blog/types';
import React, { FC } from 'react';

const MediumArticleList: FC<{ articles: Article[] }> = ({ articles }) => {
  return (
    <div>
      {articles.map((article) => (
        <MediumArticleCard article={article} key={article.guid} />
      ))}
    </div>
  );
};

export default MediumArticleList;
