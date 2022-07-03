import { GetStaticProps, NextPage } from 'next';
import Layout from 'components/Layout';
import NewsCard from 'components/NewsCard';
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
      <div className='container py-8'>
        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {blogs.map((blog) => (
            <NewsCard
              key={blog.id}
              href={blog.id}
              title={blog.title}
              image={blog.image.url}
              date={blog.publishedAt}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default index;
