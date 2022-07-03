import { NextPage } from 'next';
import Layout from 'components/Layout';
import SectionHeader from 'components/SectionHeader';

const index: NextPage = () => {
  return (
    <Layout>
      <SectionHeader subHeading='conpany' title='会社概要' />
    </Layout>
  );
};

export default index;
