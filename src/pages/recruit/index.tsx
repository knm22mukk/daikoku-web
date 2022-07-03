import { NextPage } from 'next';
import Layout from 'components/Layout';
import SectionHeader from 'components/SectionHeader';

const index: NextPage = () => {
  return (
    <Layout>
      <SectionHeader subHeading='recruit' title='採用情報' />
    </Layout>
  );
};

export default index;
