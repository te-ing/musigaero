import { MoreIcon } from '@/assets/svg';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import { MouseEventHandler, useRef, useState } from 'react';

export const PostHeaderMore = () => {
  const [isOpen, setIsOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(moreRef, (e) => {
    if (e?.target instanceof Element && e.target.closest('[id=moreBtn]')) return;
    setIsOpen(false);
  });

  const onClickMoreBtn = () => setIsOpen((prev) => !prev);

  const onClickMenu: MouseEventHandler = (e) => {
    if (!(e.target instanceof HTMLLIElement)) return;
    const { id } = e.target;
    if (id === 'slide') console.log('slide');
    if (id === 'share') console.log('share');
    if (id === 'modify') console.log('modify');
    if (id === 'remove') console.log('remove');
  };

  return (
    <div className={S.wrapper} onClick={onClickMoreBtn} id="moreBtn">
      <MoreIcon className="mt-2" />
      {isOpen && (
        <menu className={S.menu} ref={moreRef} onClick={onClickMenu}>
          <li className={S.li} id="slide">
            슬라이드
          </li>
          <li className={S.li} id="share">
            공유하기
          </li>
          <li className={S.li} id="modify">
            수정하기
          </li>
          <li className={S.li} id="remove">
            삭제하기
          </li>
        </menu>
      )}
    </div>
  );
};

const S = {
  wrapper: `
  h-full p-4 flex justify-center items-center cursor-pointer relative`,
  menu: `absolute top-full right-1/3 break-keep text-sm rounded-lg bg-white shadow-md`,
  li: `p-2 px-4 [&:hover]:bg-gray-200 rounded-lg`,
};
