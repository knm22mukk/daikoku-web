import { NextPage } from 'next';
import Link from 'next/link';
import { AiOutlineCheck, AiOutlineArrowRight } from 'react-icons/ai';

import { Breadcrumb } from '@/components/Breadcrumb';
import { PageHeader } from '@/components/PageHeader';
import { PageTemplete } from '@/components/PageTemplete';
import { SEO } from '@/components/SEO';
import { siteData } from '@/data/siteData';

const Recruit: NextPage = () => {
  return (
    <PageTemplete>
      <SEO
        title='採用情報 || 大黒工業株式会社'
        description='大黒工業株式会社では一緒に働く仲間を随時募集しております。詳細は募集要項をご覧ください'
        path={`${siteData.url}/recruit`}
      />
      <Breadcrumb lists={[{ title: '採用情報' }]} />
      <PageHeader subHeading='recruit' title='採用情報' />
      <div className='container py-8 max-w-7xl'>
        <section className='text-gray-600 body-font'>
          <p className='text-base leading-relaxed w-3/4 mx-auto text-gray-500 my-10'>
            私たちの仕事は、世の中になくてはならない商品を開発し流通させることです。
            <br />
            私たちが存在しなければ、 日々の生活がどんどん不便になってしまいます。
            <br />
            21世紀の最大の課題でもある環境問題にも取り組む日本のリーディングカンパニーで
            <br />
            あなたの実力を思う存分発揮しませんか？
            <br />
            大黒工業では業務拡大のため、一緒に働く仲間を募集しております。
            <br />
            あなたの持っている将来の可能性を重視した採用を行ないます。
            <br />
          </p>
          <div className='flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6'>
            <div className='p-4 md:w-1/3 flex flex-col text-center items-center'>
              <div className='w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0'>
                <AiOutlineCheck className='w-14 h-14' />
              </div>
              <div className='flex-grow'>
                <h2 className='text-gray-800 text-lg font-bold mb-3'>新卒採用</h2>
                <p className='leading-relaxed text-base'>
                  新卒採用に関する情報はマイナビ2023にて詳しく掲載を行なっております。詳細は下記リンクから内容ご覧ください。ご応募お待ちしております。
                </p>
                <a
                  href='https://job.mynavi.jp/23/pc/search/corp100375/outline.html'
                  className='mt-3 text-indigo-500 inline-flex items-center'
                  target='_blank'
                  rel='noreferrer'
                >
                  マイナビ2023
                  <AiOutlineArrowRight className='ml-2' />
                </a>
              </div>
            </div>
            <div className='p-4 md:w-1/3 flex flex-col text-center items-center'>
              <div className='w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0'>
                <AiOutlineCheck className='w-14 h-14' />
              </div>
              <div className='flex-grow'>
                <h2 className='text-gray-800 text-lg font-bold mb-3'>中途採用</h2>
                <p className='leading-relaxed text-base'>
                  各営業所にて中途採用を積極的に行なっております。ご興味のある方はお問合せフォームよりご連絡をお願いいたします。後日選考について詳しくご案内をさせていただきます。
                </p>
                <Link href='/contact' className='mt-3 text-indigo-500 inline-flex items-center'>
                  お問い合わせ
                  <AiOutlineArrowRight className='ml-2' />
                </Link>
              </div>
            </div>
            <div className='p-4 md:w-1/3 flex flex-col text-center items-center'>
              <div className='w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0'>
                <AiOutlineCheck className='w-14 h-14' />
              </div>
              <div className='flex-grow'>
                <h2 className='text-gray-800 text-lg font-bold mb-3'>パート・アルバイト</h2>
                <p className='leading-relaxed text-base'>
                  配送センター、工場で働くパート・アルバイトの方の募集も行っております。詳しくはお問合せフォームからご連絡をお願いいたします。{' '}
                </p>
                <Link href='/contact' className='mt-3 text-indigo-500 inline-flex items-center'>
                  お問い合わせ
                  <AiOutlineArrowRight className='ml-2' />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTemplete>
  );
};

export default Recruit;
