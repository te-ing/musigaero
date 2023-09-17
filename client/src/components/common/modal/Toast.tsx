import { sx } from '@/constants/styles';
import { useEffect, useRef } from 'react';

interface ToastProps {
  message: string;
  duration?: number;
  isOpen?: boolean;
  onClose: () => void;
}

export default function Toast({ message, duration = 1500, isOpen = false, onClose }: ToastProps) {
  const toastRef = useRef<HTMLDivElement>(null);
  const handleClose = () => {
    if (typeof onClose === 'function') onClose();
  };

  useEffect(() => {
    setTimeout(() => {
      handleClose();
      document.removeEventListener('click', () => handleClose());
    }, duration);

    document.addEventListener('click', (e) => {
      if (e.target !== toastRef.current && !toastRef.current?.contains(e.target as Node)) return;
      handleClose();
    });
    return () => document.removeEventListener('click', () => handleClose());
  }, []);

  if (!isOpen) return null;
  return (
    <div
      ref={toastRef}
      className={`${sx.flexCenter} whitespace-pre-wrap rounded-lg px-[12px] py-[8px] 
      min-h-[32px] min-w-[200px] bg-[#00000090] fixed bottom-[10vh] left-[50%]
      transform translate-x-[-50%] text-sm`}
    >
      <p className="text-slate-200">{message}</p>
    </div>
  );
}
