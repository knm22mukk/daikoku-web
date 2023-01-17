export interface News {
  id: string;
  title: string;
  description: string;
  body: string;
  image: {
    url: string;
  };
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
}
