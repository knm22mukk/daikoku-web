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
      <div className='container max-w-7xl py-16'>
        <div className='flex flex-wrap'>
          {catalogData.map((catalog, index) => (
            <div key={index} className='p-4 md:w-full lg:w-1/2'>
              <div className='flex flex-col rounded-lg border-2 border-gray-300 p-8 sm:flex-row'>
                <div className='mb-4 inline-flex shrink-0 items-center justify-center sm:mr-8 sm:mb-0'>
                  <Image src={catalog.image} height={150} width={106} alt={catalog.title} />
                </div>
                <div className='grow'>
                  <h2 className='mb-3 text-lg font-bold'>{catalog.title}</h2>
                  <p className='text-base leading-relaxed'>{catalog.description}</p>
                  <a
                    href={catalog.href}
                    target='_blank'
                    className='mt-3 inline-flex items-center text-indigo-500'
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
