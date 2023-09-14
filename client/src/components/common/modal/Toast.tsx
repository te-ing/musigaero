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
      style={{
        width: 'fit-content',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        whiteSpace: 'pre-wrap',
        padding: '4px 8px',
        minWidth: '200px',
        borderRadius: '8px',
        height: '24px',
        backgroundColor: '#00000090',
        opacity: 0.8,
        position: 'fixed',
        bottom: '10vh',
        left: '50%',
        transform: 'translate(-50%, 0)',
        fontSize: '12px',
      }}
    >
      <p style={{ color: '#ededed' }}>{message}</p>
    </div>
  );
}
