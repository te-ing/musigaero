import Snackbar from '@mui/material/Snackbar';
import { SyntheticEvent, useState } from 'react';

interface ToastProps {
  mode?: 'default' | 'error' | 'warn' | 'ok';
  message: string;
  duration?: number;
  vertical?: 'top' | 'bottom';
  horizontal?: 'left' | 'right' | 'center';
  onClose?: () => void;
}

export default function Toast({
  mode,
  message,
  duration = 1500,
  vertical = 'bottom',
  horizontal = 'center',
  onClose,
}: ToastProps) {
  const [isOpen, setIsOpen] = useState(true);
  const backgroundColor = () => {
    if (mode === 'error') return 'rgba(255, 80, 100, 0.9)';
    return '';
  };

  const handleClose = (_?: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    if (typeof onClose === 'function') onClose();
    setIsOpen(false);
  };

  return (
    <Snackbar
      sx={{
        color: 'secondary',
        '& .css-1imprin-MuiPaper-root-MuiSnackbarContent-root': {
          backgroundColor: backgroundColor(),
          maxWidth: '240px',
          height: '40px',
        },
      }}
      open={isOpen}
      autoHideDuration={duration}
      anchorOrigin={{ vertical, horizontal }}
      message={message}
      onClose={handleClose}
    ></Snackbar>
  );
}
