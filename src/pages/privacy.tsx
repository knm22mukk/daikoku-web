import { NextPage } from 'next';

import { Breadcrumb } from '@/components/Breadcrumb';
import { PageHeader } from '@/components/PageHeader';
import { PageTemplete } from '@/components/PageTemplete';
import { SEO } from '@/components/SEO';
import { siteData } from '@/data/siteData';

const Privacy: NextPage = () => {
  return (
    <PageTemplete>
      <SEO
        title='プライバシーポリシー || 大黒工業株式会社'
        description='大黒工業株式会社のプライバシーポリシーを記載させていただいているページです'
        path={`${siteData.url}/privacy`}
      />
      <Breadcrumb lists={[{ title: 'プライバシーポリシー' }]} />
      <PageHeader subHeading='privacy policy' title='プライバシーポリシー' />
      <div className='container py-16 max-w-7xl'>
        <h4 className='my-5 border-l-8 border-indigo-600 font-bold text-2xl p-3'>個人情報とは</h4>
        <p className='text-gray-500 my-3'>
          「個人情報」とは、その情報に係わる個人を識別する情報、またはそれを使用することにより、その個人を識別できるすべての情報を指しています。
        </p>
        <p className='text-gray-500 my-3'>
          当社が収集し、保持するすべての「個人情報」の取り扱いには、当社のプライバシーポリシーおよびその修正版が適用されます。
        </p>
        <h4 className='my-5 border-l-8 border-indigo-600 font-bold text-2xl p-3'>
          個人情報の収集・利用目的
        </h4>
        <p className='text-gray-500 my-3'>
          当社では、お客様のご住所、お名前、ご注文商品、電話番号、メールアドレスなどの情報は、サービスのご案内や調査（アンケート）などに使用させていただく場合がありますので、あらかじめご了承ください。
        </p>
        <h4 className='my-5 border-l-8 border-indigo-600 font-bold text-2xl p-3'>個人情報の開示</h4>
        <p className='text-gray-500 my-3'>
          当社は、お客様の個人情報を、お客様の同意を得ることなく業務委託先以外の第三者に開示することはありません。
          ただし、法令により開示を求められた場合、または裁判所、警察等の公的機関から開示を求められた場合は、お客様の同意なく個人情報を開示することがあります。
        </p>
        <h4 className='my-5 border-l-8 border-indigo-600 font-bold text-2xl p-3'>
          プライバシーポリシーの変更
        </h4>
        <p className='text-gray-500 my-3'>
          当社は、当社独自の裁量で、プライバシーポリシーを変更する権利を留保します。変更した場合は、当ホームページで、その旨を通知します。
        </p>
        <h4 className='my-5 border-l-8 border-indigo-600 font-bold text-2xl p-3'>注意事項</h4>
        <p className='text-gray-500 my-3'>
          自発的に個人情報を開示した場合（掲示版など）、その情報は他のユーザーによって収集され使用される可能性があることに留意して下さい。
          誰もがアクセスでき得るオンライン上に個人情報を開示すれば他人から望ましくないメッセージを受ける場合もあります。
          個人情報の公開に関しては、ユーザーご本人で判断いただきますようお願いいたします。
        </p>
        <p className='text-gray-500 my-3'>
          当社では当サイトが保有する個人情報に関して適用される法令、規範を遵守するとともに、上記に関する取り組みを適宜見直し、改善してまいります。
        </p>
      </div>
    </PageTemplete>
  );
};

export default Privacy;
