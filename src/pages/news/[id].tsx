import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Layout from 'components/Layout';
import { client } from 'libs/client';
import { Blog } from 'types/blog';

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blogs' });

  const paths = data.contents.map((content: { id: string }) => `/news/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id: any = context.params?.id;
  const data = await client.get({ endpoint: 'blogs', contentId: id });
  return {
    props: {
      blog: data,
    },
  };
};

type Props = {
  blog: Blog;
};
const BlogId: NextPage<Props> = ({ blog }) => {
  return <Layout>{blog.title}</Layout>;
};

export default BlogId;
