import Alert from '@/components/common/modal/Alert';
import Confirm from '@/components/common/modal/Confirm';
import Loading from '@/components/common/modal/Loading';
import Toast from '@/components/common/modal/Toast';
import { Alert as AlertType, Confirm as ConfirmType, Loading as LoadingType, Toast as ToastType } from '@/type/modal';
import React, { ReactElement, createContext, useState } from 'react';

export interface ModalContextType {
  alerts: AlertType[];
  setAlerts: React.Dispatch<React.SetStateAction<AlertType[]>>;
  confirms: ConfirmType[];
  setConfirms: React.Dispatch<React.SetStateAction<ConfirmType[]>>;
  toasts: ToastType[];
  setToasts: React.Dispatch<React.SetStateAction<ToastType[]>>;
  loadings: LoadingType[];
  setLoadings: React.Dispatch<React.SetStateAction<LoadingType[]>>;
}

export const ModalContext = createContext<ModalContextType>({
  alerts: [],
  setAlerts: () => {},
  confirms: [],
  setConfirms: () => {},
  toasts: [],
  setToasts: () => {},
  loadings: [],
  setLoadings: () => {},
});

export const ModalProvider = ({ children }: { children: ReactElement }) => {
  const [alerts, setAlerts] = useState<AlertType[]>([]);
  const [confirms, setConfirms] = useState<ConfirmType[]>([]);
  const [toasts, setToasts] = useState<ToastType[]>([]);
  const [loadings, setLoadings] = useState<LoadingType[]>([]);

  return (
    <ModalContext.Provider
      value={{
        alerts,
        setAlerts,
        confirms,
        setConfirms,
        toasts,
        setToasts,
        loadings,
        setLoadings,
      }}
    >
      {children}

      {/* 모달 */}
      {alerts[0] && <Alert {...alerts[0]} />}
      {confirms[0] && <Confirm {...confirms[0]} />}
      {toasts[0] && toasts.map((toast) => <Toast {...toast} key={toast.id} />)}
      {loadings[0] && <Loading {...loadings[0]} />}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
