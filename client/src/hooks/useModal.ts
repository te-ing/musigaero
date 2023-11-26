import {
  ModalActionsContext,
  ModalContextActionsType,
  ModalContextValueType,
  ModalValueContext,
} from '@/components/common/modal/ModalProvider';
import { useContext } from 'react';

interface AlertOptions {
  title?: string;
  onClose?: () => void;
}

interface ConfirmOptions {
  title?: string;
  message: string;
  onClose?: () => void;
  onConfirm: () => void;
}

interface ToastOptions {
  duration?: number;
  onClose?: () => void;
}

const useModal = () => {
  const { setAlerts, setConfirms, setToasts } = useContext<ModalContextActionsType>(ModalActionsContext);
  const { alerts, confirms, toasts } = useContext<ModalContextValueType>(ModalValueContext);

  const showAlert = (message: string, options: AlertOptions = {}) => {
    const newAlerts = [...alerts];
    const id = `${new Date().getTime()}`;

    newAlerts.push({
      id,
      type: 'alert',
      title: options.title,
      message,
      onClose: () => {
        hideAlert(id);
        if (typeof options.onClose === 'function') options.onClose();
      },
      isOpen: true,
    });
    setAlerts(newAlerts);
  };

  const hideAlert = (id?: string) => {
    if (id) {
      const newAlerts = alerts.filter((alert) => alert.id !== id);
      setAlerts(newAlerts);
    } else {
      const newAlerts = [...alerts];
      newAlerts.unshift();
      setAlerts(newAlerts);
    }
  };

  const showConfirm = (options: ConfirmOptions) => {
    const newConfirms = [...confirms];
    const id = `${new Date().getTime()}`;
    newConfirms.push({
      id,
      type: 'confirm',
      title: options.title,
      message: options.message,
      onConfirm: () => options.onConfirm(),
      onClose: () => {
        hideConfirm(id);
        if (typeof options.onClose === 'function') options.onClose();
      },
      isOpen: true,
    });
    setConfirms(newConfirms);
  };

  const hideConfirm = (id?: string) => {
    if (id) {
      const newConfirms = confirms.filter((confirm) => confirm.id !== id);
      setConfirms(newConfirms);
    } else {
      const newConfirms = confirms.slice(1);
      setConfirms(newConfirms);
    }
  };

  const showToast = (message: string, options: ToastOptions = {}) => {
    const newToasts = [...toasts];
    const id = `${new Date().getTime()}`;
    newToasts.push({
      id,
      type: 'toast',
      message,
      isOpen: true,
      duration: options.duration,
      onClose: () => {
        hideToast(id);
        if (typeof options.onClose === 'function') options.onClose();
      },
    });
    setToasts(newToasts);
  };

  const hideToast = (id?: string) => {
    if (id) {
      const newToasts = toasts.filter((alert) => alert.id !== id);
      setToasts(newToasts);
    } else {
      const newToasts = [...toasts];
      newToasts.unshift();
      setToasts(newToasts);
    }
  };

  return {
    showAlert,
    hideAlert,
    showConfirm,
    hideConfirm,
    showToast,
    hideToast,
  };
};

export default useModal;
