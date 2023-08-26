import Snackbar from '@mui/material/Snackbar';
import { SyntheticEvent, useState } from 'react';

interface ToastProps {
  message: string;
  duration?: number;
  vertical?: 'top' | 'bottom';
  horizontal?: 'left' | 'right' | 'center';
  onClose?: () => void;
}

export default function Toast({
  message,
  duration = 3000,
  vertical = 'bottom',
  horizontal = 'center',
  onClose,
}: ToastProps) {
  const [isOpen, setIsOpen] = useState(true);

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
