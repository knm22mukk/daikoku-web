import { NextPage } from 'next';

import { Breadcrumb } from '@/components/Breadcrumb';
import { PageHeader } from '@/components/PageHeader';
import { PageTemplete } from '@/components/PageTemplete';
import { SEO } from '@/components/SEO';
import { companyHistory } from '@/data/companyHistory';
import { siteData } from '@/data/siteData';

const history: NextPage = () => {
  return (
    <PageTemplete>
      <SEO
        title='会社沿革 || 大黒工業株式会社'
        description='大黒工業株式会社の会社沿革のご案内ページです'
        path={`${siteData.url}/company/history`}
      />
      <Breadcrumb lists={[{ title: '会社情報', path: '/company' }, { title: '会社沿革' }]} />
      <PageHeader subHeading='history' title='会社沿革' />
      <div className='container max-w-7xl py-16'>
        <table className='w-full text-left text-sm text-gray-500'>
          {companyHistory.map((history) => (
            <tbody key={history.title}>
              <tr className='border-b hover:bg-white'>
                <td className='w-1/3 px-1 py-4 md:px-6'>{history.date}</td>
                <td className='w-2/3 px-1 py-4 md:px-6'>{history.title}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </PageTemplete>
  );
};

export default history;
