import { NextPage } from 'next';
import Layout from 'components/Layout';
import SectionHeader from 'components/SectionHeader';

const index: NextPage = () => {
  return (
    <Layout>
      <SectionHeader subHeading='contact' title='お問合わせ' />
    </Layout>
  );
};

export default index;
