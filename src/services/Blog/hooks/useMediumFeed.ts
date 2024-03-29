import { RssFeed, RssFeedResult } from '@/services/blog/types';

const fetchMediumFeed = async (username: string): Promise<RssFeedResult> => {
  const mediumUrl = `https://medium.com/feed/@${username}`;
  return (
    await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${mediumUrl}`)
  ).json();
};

export const useMediumFeed = async (
  username: string,
  maxArticles: number
): Promise<RssFeed | null> => {
  const { feed, items, status } = await fetchMediumFeed(username);

  if (!feed || status !== 'ok') {
    alert('Pass a valid medium username.');
    return null;
  }
  const articles = items
    ?.filter((item) => item.thumbnail)
    .slice(0, maxArticles)
    .map((item) => {
      return {
        ...item,
        userLink: feed.link,
      };
    });

  return { feed, articles };
};
