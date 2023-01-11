import { NextPage } from 'next';
import Image from 'next/image';

import { Breadcrumb } from '@/components/Breadcrumb';
import { PageHeader } from '@/components/PageHeader';
import { PageTemplete } from '@/components/PageTemplete';
import { SEO } from '@/components/SEO';
import { siteData } from '@/data/siteData';

const greeting: NextPage = () => {
  return (
    <PageTemplete>
      <SEO
        title='代表挨拶 || 大黒工業株式会社'
        description='大黒工業株式会社の代表取締役よりご挨拶させていただきます'
        path={`${siteData.url}/company/greeting`}
      />

      <Breadcrumb lists={[{ title: '会社情報', path: '/company' }, { title: '代表挨拶' }]} />
      <PageHeader subHeading='greeting' title='代表挨拶' />
      <div className='container py-8'>
        <div className='flex justify-center'>
          <Image src='/images/company-image.jpeg' width={640} height={480} alt='本社イメージ' />
        </div>
        <div className=''>
          <h3 className='my-5 border-l-8 border-indigo-600 font-bold text-3xl p-3'>大黒工業とは</h3>
          <p className='text-gray-500'>
            当社は1950年”紙の町”愛媛県四国中央市に誕生しました。依頼、食文化の多様なニーズに即応し、紙・プラスチック関連の自社製造品を中心に、「食」に関する業務用包装資材や雑貨など8万点を超えるアイテムを幅広くマーケットに提供してきました。
            <br />
            数多くのお客様の支えをいただき、「”Daikoku”へ注文すればなんでも揃う」と言われるようになりました。
          </p>
        </div>
        <div className=''>
          <h3 className='my-5 border-l-8 border-indigo-600 font-bold text-3xl p-3'>
            代表者メッセージ
          </h3>
          <p className='text-gray-500'>
            当社では、よりユーザーに近いところで考え、行動し、常に「お客様を一番大切にする」ことを経営理念として、一貫して食品包装資材と、これに関連する事業をコアとした経営を展開してまいりました。
            <br />
            この経営理念を引き続き実践し「豊かな包装の世界をクリエイト」して豊かな食文化の発展に貢献したいと考えております。
          </p>
          <p className='text-gray-500 mt-4'>
            ここ数年、繰り返し述べている点ですが、「21世紀を生き残る企業は、環境問題にどう積極的に取組んでいる企業であるか」だと思います。
            その視点から環境対応型商品を積極的に上市しております。
          </p>
          <p className='text-gray-500 mt-4'>
            今後ともお客様のニーズに的確にお応えすると共に、激変する社会の要請に十分対応できる経営を強力に推進してまいります。皆様方のご指導とご鞭撻のほど宜しくお願い申しあげます。
          </p>
          <p className='text-gray-500 mt-4'>代表取締役社長 石川力也</p>
        </div>
      </div>
    </PageTemplete>
  );
};

export default greeting;
