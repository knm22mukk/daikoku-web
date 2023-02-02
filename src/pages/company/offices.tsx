import { NextPage } from 'next';

import { Breadcrumb } from '@/components/Breadcrumb';
import { PageHeader } from '@/components/PageHeader';
import { PageTemplete } from '@/components/PageTemplete';
import { SEO } from '@/components/SEO';
import { companyData } from '@/data/companyData';
import { siteData } from '@/data/siteData';

const offices: NextPage = () => {
  return (
    <PageTemplete>
      <SEO
        title='拠点一覧 || 大黒工業株式会社'
        description='大黒工業株式会社の事務所、拠点一覧のご案内ページです'
        path={`${siteData.url}/company/offices`}
      />
      <Breadcrumb lists={[{ title: '会社情報', path: '/company' }, { title: '拠点一覧' }]} />
      <PageHeader subHeading='offices' title='拠点一覧' />
      <div className='container max-w-7xl py-16'>
        <p className='mb-8 text-center font-light text-gray-500'>
          大黒工業グループでは、日本全国、及び海外で幅広く活動しております。
          <br />
          こちらでは営業所の拠点一覧と関連企業のご紹介をしております。
        </p>
        {companyData.map((company) => (
          <div key={company.department.id}>
            <h3 className='my-5 border-l-8 border-indigo-600 p-3 text-3xl font-bold'>
              {company.department.name}
            </h3>
            <div className='relative overflow-x-auto'>
              <table className='w-full text-left text-sm text-gray-500'>
                <thead className='bg-gray-50 text-lg uppercase text-gray-700'>
                  <tr>
                    <th className='w-1/4 px-1 py-3 md:px-6'>名称</th>
                    <th className='w-1/2 px-1 py-3 md:px-6'>住所</th>
                    <th className='w-1/4 px-1 py-3 md:px-6'>電話番号</th>
                  </tr>
                </thead>
                {company.department.meisai.map((dep) => (
                  <tbody key={dep.id}>
                    <tr className='border-b hover:bg-white'>
                      <td className='px-1 py-4 md:px-6'>{dep.name}</td>
                      <td className='px-1 py-4 md:px-6'>{dep.address}</td>
                      <td className='px-1 py-4 md:px-6'>{dep.tel}</td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        ))}
      </div>
    </PageTemplete>
  );
};

export default offices;
