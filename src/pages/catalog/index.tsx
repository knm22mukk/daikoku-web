import { NextPage } from 'next';
import Image from 'next/image';
import { AiOutlineArrowRight } from 'react-icons/ai';

import { Breadcrumb } from '@/components/Breadcrumb';
import { PageHeader } from '@/components/PageHeader';
import { PageTemplete } from '@/components/PageTemplete';
import { SEO } from '@/components/SEO';
import { catalogData } from '@/data/catalogData';
import { siteData } from '@/data/siteData';

const index: NextPage = () => {
  return (
    <PageTemplete>
      <SEO
        title='カタログ一覧 || 大黒工業株式会社'
        description='大黒工業株式会社のカタログ一覧ページです。こちらからもお取り扱い商品のご確認をいただけます。'
        path={`${siteData.url}/catalog`}
      />
      <Breadcrumb lists={[{ title: 'カタログ一覧' }]} />
      <PageHeader subHeading='catalog' title='カタログ一覧' />
      <div className='container py-16 max-w-7xl'>
        <div className='flex flex-wrap'>
          {catalogData.map((catalog, index) => (
            <div key={index} className='p-4 lg:w-1/2 md:w-full'>
              <div className='flex border-2 rounded-lg border-gray-300 border-opacity-50 p-8 sm:flex-row flex-col'>
                <div className='sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center flex-shrink-0'>
                  <Image src={catalog.image} height={150} width={106} alt={catalog.title} />
                </div>
                <div className='flex-grow'>
                  <h2 className='text-lg font-bold mb-3'>{catalog.title}</h2>
                  <p className='leading-relaxed text-base'>{catalog.description}</p>
                  <a
                    href={catalog.href}
                    target='_blank'
                    className='mt-3 text-indigo-500 inline-flex items-center'
                    rel='noreferrer'
                  >
                    カタログを見る
                    <AiOutlineArrowRight className='ml-2' />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTemplete>
  );
};

export default index;
