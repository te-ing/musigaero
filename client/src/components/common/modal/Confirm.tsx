import useModal from '@/hooks/useModal';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import { useRef } from 'react';

interface ConfirmProps {
  title?: string;
  message: string;
  confirm?: string;
  cancle?: string;
  isOpen?: boolean;
  onClose?: (isConfirm: boolean) => void;
}

export default function Confirm({ title, message, cancle = '취소', confirm = '확인', onClose }: ConfirmProps) {
  const confrimRef = useRef<HTMLDivElement>(null);
  const { hideConfirm } = useModal();
  const handleClose = (isConfirm: boolean) => {
    hideConfirm();
    if (typeof onClose === 'function') onClose(isConfirm);
  };
  useOnClickOutside(confrimRef, () => handleClose(false));

  return (
    <div className="bg-[#00000080] flex items-center justify-center fixed top-0 left-0 w-full h-full">
      <div
        ref={confrimRef}
        className="w-[300px] h-[160px] bg-white rounded-3xl flex items-center justify-center flex-col p-4 py-6"
      >
        {title && <p className="text-[18px] font-medium ">{title}</p>}
        <p className="mb-2 mt-4">{message}</p>

        <div className="flex w-full justify-end gap-2 mt-auto">
          <button className="flex justify-center w-[60px]" type="button" onClick={() => handleClose(true)}>
            {cancle}
          </button>
          <button className="flex justify-center w-[60px]" type="button" onClick={() => handleClose(true)}>
            {confirm}
          </button>
        </div>
      </div>
    </div>
  );
}
