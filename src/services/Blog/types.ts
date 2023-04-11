export interface Article {
  title: string;
  thumbnail: string;
  categories: string[];
  author: string;
  pubDate: string;
  userLink: string;
  link: string;
  guid: string;
}

export interface Feed {
  title: string;
  image: string;
  link: string;
}

export interface RssFeed {
  articles: Article[];
  feed: Feed;
}

export interface RssFeedResult {
  items: Article[];
  status: string;
  feed: Feed;
}
