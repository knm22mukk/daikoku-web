import { GetStaticProps, NextPage } from 'next';
import Layout from 'components/Layout';
import SectionHeader from 'components/SectionHeader';
import { client } from 'libs/client';
import { Blog } from 'types/blog';

export const getStaticProps: GetStaticProps = async () => {
  const blog = await client.get({ endpoint: 'blogs' });

  return {
    props: {
      blogs: blog.contents,
    },
  };
};

type Props = {
  blogs: Blog[];
};

const index: NextPage<Props> = ({ blogs }) => {
  return (
    <Layout>
      <SectionHeader subHeading='news' title='更新情報' />
      {blogs.map((blog) => (
        <div key={blog.id}>{blog.title}</div>
      ))}
    </Layout>
  );
};

export default index;
