import { FC } from 'react';
import { HiOutlineLightningBolt } from 'react-icons/hi';

const FeatureItems = [
  {
    title: '幅広い扱いアイテム',
    description:
      '大黒工業株式会社では10万を超えるアイテム数の取り扱いをしておりますので、お客様のニーズに合わせた幅広いご提案が可能です。',
  },
  {
    title: 'ピッキングシステム',
    description:
      'ピッキングシステムを活用することでケース単位では購入できない商品もケース割れの小ロットで購入することが可能です。在庫リスク軽減、必要最小限の購入が可能です。',
  },
  {
    title: '環境配慮製品の取り扱い強化',
    description:
      'パルプモールドをはじめとする環境配慮型の製品を多数取り扱いしております。今後も環境負荷を軽減できる製品を開発してまいります。',
  },
  {
    title: '障害者雇用の促進',
    description:
      '大黒友愛紙工（株）という特例子会社を設立し、障害者雇用を促進しております。障害者雇用の促進を通じて、社会に貢献できる企業を目指しております。',
  },
];

export const Features: FC = () => {
  return (
    <section className='container max-w-7xl py-16'>
      <div className='flex flex-col items-center px-4'>
        <p className='text-center text-sm uppercase leading-4 text-indigo-500'>
          What are the features?
        </p>
        <h2 className='pt-4 text-center text-4xl font-extrabold leading-10  lg:text-4xl'>
          大黒工業株式会社の特長は？
        </h2>
      </div>
      <div aria-label='group of cards' className='mt-20 flex flex-wrap justify-center gap-10 px-4'>
        {FeatureItems.map((feature, index) => (
          <div key={index} className='flex pb-20 sm:w-full md:w-5/12'>
            <div className='relative mr-5 h-20 w-20'>
              <div className='absolute top-0 right-0 mt-2 mr-1 h-16 w-16 rounded bg-indigo-100' />
              <div className='absolute bottom-0 left-0 mt-2 mr-3 flex h-16 w-16 items-center justify-center rounded bg-indigo-700 text-white'>
                <HiOutlineLightningBolt className='h-10 w-10' />
              </div>
            </div>
            <div className='w-10/12'>
              <h2 className='text-lg font-bold leading-tight'>{feature.title}</h2>
              <p className='pt-2 text-base leading-normal text-gray-600'>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
