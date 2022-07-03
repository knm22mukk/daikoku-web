import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Date from 'components/Date';
import Layout from 'components/Layout';
import SectionHeader from 'components/SectionHeader';
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
  return (
    <Layout>
      <SectionHeader subHeading='NEWS' title={blog.title} />
      <div className='container'>
        <Image
          src={blog.image.url}
          width={1200}
          height={630}
          alt={blog.title}
          objectFit='cover'
          className='rounded-lg'
        />
        <p className='my-8 text-lg text-right text-gray-600'>
          <Date dateString={blog.publishedAt} />
        </p>
        <div dangerouslySetInnerHTML={{ __html: `${blog.body}` }} className='' />
        <div className='py-8'>
          <Link href='/news'>
            <a className='py-3 px-5 m-2 text-sm font-bold text-white bg-blue-600 hover:bg-blue-800 rounded-lg'>
              一覧に戻る
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default BlogId;
