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
      <div className='container py-16 max-w-7xl'>
        <table className='w-full text-sm text-left text-gray-500'>
          {companyHistory.map((history) => (
            <tbody key={history.title}>
              <tr className='hover:bg-white border-b'>
                <td className='px-1 md:px-6 py-4 w-1/3'>{history.date}</td>
                <td className='px-1 md:px-6 py-4 w-2/3'>{history.title}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </PageTemplete>
  );
};

export default history;
