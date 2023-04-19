import { Article } from '@/services/blog/types';
import React, { FC } from 'react';

const MediumArticleCard: FC<{ article: Article }> = ({ article }) => {
  return (
    <div>
      <h1>{article.title}</h1>
      <small>{article.pubDate}</small>
    </div>
  );
};

export default MediumArticleCard;
