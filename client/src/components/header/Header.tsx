import { LeftBracketIcon, LogoKoreanColorIcon } from '@/assets/svg';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header({ title, more, hr }: { title?: ReactNode; more?: ReactNode; hr?: boolean }) {
  const navigate = useNavigate();

  return (
    <>
      <header className="flex h-11 w-full justify-between px-2 items-center">
        <button onClick={() => navigate(-1)} className="p-2">
          <LeftBracketIcon />
        </button>
        {title || <LogoKoreanColorIcon height={22} />}
        {more || <div />}
      </header>
      {hr && <hr className="my-2 border-gray-200" />}
    </>
  );
}
