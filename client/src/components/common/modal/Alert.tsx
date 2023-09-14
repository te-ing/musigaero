import useOnClickOutside from '@/hooks/useOnClickOutside';
import { useRef } from 'react';

interface AlertProps {
  title?: string;
  message: string;
  confirm?: string;
  isOpen?: boolean;
  onClose?: (isConfirm: boolean) => void;
}

export default function Alert({ title, message, confirm = '확인', isOpen = false, onClose }: AlertProps) {
  const alertRef = useRef<HTMLDivElement>(null);
  const handleClose = (isConfirm: boolean) => {
    if (typeof onClose === 'function') onClose(isConfirm);
  };
  useOnClickOutside(alertRef, () => handleClose(false));

  if (!isOpen) return null;
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#00000080',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
      }}
    >
      <div
        ref={alertRef}
        style={{
          width: '300px',
          height: '120px',
          backgroundColor: '#fff',
        }}
      >
        {title && <p>{title}</p>}
        <div>
          <p>{message}</p>
        </div>

        <div>
          <button type="button" onClick={() => handleClose(true)}>
            {confirm}
          </button>
        </div>
      </div>
    </div>
  );
}
