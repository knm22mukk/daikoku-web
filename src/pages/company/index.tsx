import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Breadcrumb } from '@/components/Breadcrumb';
import { PageHeader } from '@/components/PageHeader';
import { PageTemplete } from '@/components/PageTemplete';
import { SEO } from '@/components/SEO';
import { siteData } from '@/data/siteData';

const Company: NextPage = () => {
  return (
    <PageTemplete>
      <SEO
        title='会社情報 || 大黒工業株式会社'
        description='大黒工業株式会社の会社情報をご案内いたします。'
        path={`${siteData.url}/company`}
      />

      <Breadcrumb lists={[{ title: '会社情報' }]} />
      <PageHeader subHeading='company' title='会社情報' />
      <div className='container max-w-7xl py-16'>
        <h3 className='my-5 border-l-8 border-indigo-600 p-3 text-3xl font-bold'>会社概要</h3>
        <table className='w-full text-left text-sm text-gray-500'>
          <tbody>
            <tr className='border-b hover:bg-white'>
              <td className='w-1/3 px-1 py-4 md:px-6'>会社名</td>
              <td className='w-2/3 px-1 py-4 md:px-6'>大黒工業株式会社</td>
            </tr>
            <tr className='border-b hover:bg-white'>
              <td className='w-1/3 px-1 py-4 md:px-6'>所在地</td>
              <td className='w-2/3 px-1 py-4 md:px-6'>愛媛県四国中央市中曽根町1593</td>
            </tr>
            <tr className='border-b hover:bg-white'>
              <td className='w-1/3 px-1 py-4 md:px-6'>代表者</td>
              <td className='w-2/3 px-1 py-4 md:px-6'>取締役社長 石川力也</td>
            </tr>
            <tr className='border-b hover:bg-white'>
              <td className='w-1/3 px-1 py-4 md:px-6'>決算日</td>
              <td className='w-2/3 px-1 py-4 md:px-6'>6月末日</td>
            </tr>
            <tr className='border-b hover:bg-white'>
              <td className='w-1/3 px-1 py-4 md:px-6'>資本金</td>
              <td className='w-2/3 px-1 py-4 md:px-6'>3億5,300万円</td>
            </tr>
            <tr className='border-b hover:bg-white'>
              <td className='w-1/3 px-1 py-4 md:px-6'>創業</td>
              <td className='w-2/3 px-1 py-4 md:px-6'>1950年1月</td>
            </tr>
            <tr className='border-b hover:bg-white'>
              <td className='w-1/3 px-1 py-4 md:px-6'>設立</td>
              <td className='w-2/3 px-1 py-4 md:px-6'>1972年1月</td>
            </tr>
            <tr className='border-b hover:bg-white'>
              <td className='w-1/3 px-1 py-4 md:px-6'>従業員数</td>
              <td className='w-2/3 px-1 py-4 md:px-6'>410名</td>
            </tr>
          </tbody>
        </table>
        <ul className='flex justify-center pt-16'>
          <li className='mx-3 hover:opacity-70'>
            <Link href='/company/greeting'>
              <Image
                src='/images/home_image.jpg'
                width={200}
                height={200}
                alt='本社イメージ'
                className='rounded-full'
              />
              <span className='mt-2 flex justify-center text-gray-500'>代表挨拶</span>
            </Link>
          </li>
          <li className='mx-3 hover:opacity-70'>
            <Link href='/company/offices'>
              <Image
                src='/images/home_image.jpg'
                width={200}
                height={200}
                alt='本社イメージ'
                className='rounded-full'
              />
              <span className='mt-2 flex justify-center text-gray-500'>拠点一覧</span>
            </Link>
          </li>
          <li className='mx-3 hover:opacity-70'>
            <Link href='/company/history'>
              <Image
                src='/images/home_image.jpg'
                width={200}
                height={200}
                alt='本社イメージ'
                className='rounded-full'
              />
              <span className='mt-2 flex justify-center text-gray-500'>会社沿革</span>
            </Link>
          </li>
        </ul>
      </div>
    </PageTemplete>
  );
};

export default Company;
