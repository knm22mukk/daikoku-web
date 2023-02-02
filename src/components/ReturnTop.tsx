import { FC, useEffect, useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';

export const ReturnTop: FC = () => {
  const [showButton, setShowButton] = useState<boolean>(false);
  const returnTop = (): void => {
    typeof window !== 'undefined' &&
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
  };
  const scrollWindow = (): void => {
    const top = 100;
    let scroll = 0;
    scroll = window.scrollY;
    if (top <= scroll) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', scrollWindow);
    return () => {
      window.removeEventListener('scroll', scrollWindow);
    };
  }, []);

  return (
    <button
      type='button'
      aria-label='トップに戻る'
      onClick={returnTop}
      className={`fixed right-10 bottom-10 rounded-full bg-green-500 p-4 text-3xl text-white hover:bg-green-600 ${
        showButton ? '' : 'hidden'
      }`}
    >
      <AiOutlineArrowUp />
    </button>
  );
};
