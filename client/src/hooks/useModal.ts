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
interface ToastOptions {
  duration?: number;
  onClose?: () => void;
}

const useModal = () => {
  const { setAlerts, setToasts } = useContext<ModalContextActionsType>(ModalActionsContext);
  const { alerts, toasts } = useContext<ModalContextValueType>(ModalValueContext);

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
    showToast,
    hideToast,
  };
};

export default useModal;
