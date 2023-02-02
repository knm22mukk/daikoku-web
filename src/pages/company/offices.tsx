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
      <div className='py-16 container max-w-7xl'>
        <p className='mb-8 font-light text-center text-gray-500'>
          大黒工業グループでは、日本全国、及び海外で幅広く活動しております。
          <br />
          こちらでは営業所の拠点一覧と関連企業のご紹介をしております。
        </p>
        {companyData.map((company) => (
          <div key={company.department.id}>
            <h3 className='my-5 border-l-8 border-indigo-600 font-bold text-3xl p-3'>
              {company.department.name}
            </h3>
            <div className='relative overflow-x-auto'>
              <table className='w-full text-sm text-left text-gray-500'>
                <thead className='text-lg text-gray-700 uppercase bg-gray-50'>
                  <tr>
                    <th className='px-1 md:px-6 py-3 w-1/4'>名称</th>
                    <th className='px-1 md:px-6 py-3 w-1/2'>住所</th>
                    <th className='px-1 md:px-6 py-3 w-1/4'>電話番号</th>
                  </tr>
                </thead>
                {company.department.meisai.map((dep) => (
                  <tbody key={dep.id}>
                    <tr className='hover:bg-white border-b'>
                      <td className='px-1 md:px-6 py-4'>{dep.name}</td>
                      <td className='px-1 md:px-6 py-4'>{dep.address}</td>
                      <td className='px-1 md:px-6 py-4'>{dep.tel}</td>
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
