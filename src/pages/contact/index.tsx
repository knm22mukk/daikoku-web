import { NextPage } from 'next';
import { FormEvent, useState } from 'react';

import { Breadcrumb } from '@/components/Breadcrumb';
import { BaseButton } from '@/components/Buttons';
import { PageHeader } from '@/components/PageHeader';
import { PageTemplete } from '@/components/PageTemplete';
import { SEO } from '@/components/SEO';
import { siteData } from '@/data/siteData';

const Contact: NextPage = () => {
  const [company, setCompany] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(
      `会社名：${company}, お名前：${name}, メールアドレス：${email}, ご住所：${address}, お電話番号：${phone}, メッセージ：${message}`,
    );
  };
  return (
    <PageTemplete>
      <SEO
        title='お問い合わせ || 大黒工業株式会社'
        description='大黒工業株式会社へのお問い合わせはこちらからメール送信をお願いいたします'
        path={`${siteData.url}/contact`}
      />
      <Breadcrumb lists={[{ title: 'お問い合わせ' }]} />
      <PageHeader subHeading='contact' title='お問い合わせ' />
      <div className='py-16 container max-w-7xl'>
        <p className='mb-8 font-light text-center text-gray-500'>
          お問い合わせがありましたらお気軽にこちらからご連絡下さい。
          <br />
          お問い合わせから2、3日以内にご返信させていただきます。
        </p>
        <form className='space-y-8 max-w-lg mx-auto' onSubmit={handleSubmit}>
          <div>
            <label className='mb-2 text-sm font-medium'>
              会社名<span className='text-red-500 ml-1'>*</span>
            </label>
            <input
              type='text'
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className='shadow-sm border border-gray-300 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 w-full p-3'
              required
            />
          </div>
          <div>
            <label className='mb-2 text-sm font-medium'>
              お名前<span className='text-red-500 ml-1'>*</span>
            </label>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='shadow-sm border border-gray-300 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 w-full p-3'
              required
            />
          </div>
          <div>
            <label className='mb-2 text-sm font-medium'>
              メールアドレス<span className='text-red-500 ml-1'>*</span>
            </label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='shadow-sm border border-gray-300 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 w-full p-3'
              required
            />
          </div>
          <div>
            <label className='mb-2 text-sm font-medium'>
              ご住所<span className='text-red-500 ml-1'>*</span>
            </label>
            <input
              type='address'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className='shadow-sm border border-gray-300 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 w-full p-3'
              required
            />
          </div>
          <div>
            <label className='mb-2 text-sm font-medium'>
              お電話番号<span className='text-red-500 ml-1'>*</span>
            </label>
            <input
              type='tel'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className='shadow-sm border border-gray-300 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 w-full p-3'
              required
            />
          </div>
          <div>
            <label className='mb-2 text-sm font-medium'>
              メッセージ<span className='text-red-500 ml-1'>*</span>
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className='shadow-sm border border-gray-300 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 w-full p-3'
              required
              rows={5}
            ></textarea>
          </div>
          <div className='flex justify-center'>
            <BaseButton type='submit'>送信する</BaseButton>
          </div>
        </form>
      </div>
    </PageTemplete>
  );
};

export default Contact;
