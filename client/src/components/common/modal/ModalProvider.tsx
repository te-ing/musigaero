import React, { ReactElement, createContext, useContext, useMemo, useState } from 'react';
import Alert from './Alert';
import Toast from './Toast';
import Confirm from './Confirm';

export interface Modal {
  id: string;
  type: string;
}

export interface AlertType extends Modal {
  type: 'alert';
  title?: string;
  message: string;
  isOpen: boolean;
  onClose?: () => void;
}

export interface ConfirmType extends Modal {
  type: 'confirm';
  title?: string;
  message: string;
  isOpen: boolean;
  onClose?: () => void;
  onConfirm?: () => void;
}

export interface ToastType extends Modal {
  type: 'toast';
  message: string;
  isOpen: boolean;
  duration?: number;
  onClose: () => void;
}

export interface ModalContextValueType {
  alerts: AlertType[];
  confirms: ConfirmType[];
  toasts: ToastType[];
}
export interface ModalContextActionsType {
  setAlerts: React.Dispatch<React.SetStateAction<AlertType[]>>;
  setConfirms: React.Dispatch<React.SetStateAction<ConfirmType[]>>;
  setToasts: React.Dispatch<React.SetStateAction<ToastType[]>>;
}

export const ModalValueContext = createContext<ModalContextValueType>({
  alerts: [],
  confirms: [],
  toasts: [],
});
export const ModalActionsContext = createContext<ModalContextActionsType>({
  setAlerts: () => {},
  setConfirms: () => {},
  setToasts: () => {},
});

export function ModalProvider({ children }: { children: ReactElement }) {
  const [alerts, setAlerts] = useState<AlertType[]>([]);
  const [confirms, setConfirms] = useState<ConfirmType[]>([]);
  const [toasts, setToasts] = useState<ToastType[]>([]);

  const values = useMemo(() => {
    return { alerts, confirms, toasts };
  }, [alerts, confirms, toasts]);

  const actions = useMemo(() => {
    return {
      setAlerts,
      setConfirms,
      setToasts,
    };
  }, [setAlerts, setConfirms, setToasts]);

  return (
    <ModalActionsContext.Provider value={actions}>
      <ModalValueContext.Provider value={values}>
        {children}
        {alerts[0] && <Alert {...alerts[0]} />}
        {confirms[0] && <Confirm {...confirms[0]} />}
        {toasts[0] && <Toast {...toasts[0]} />}
      </ModalValueContext.Provider>
    </ModalActionsContext.Provider>
  );
}

export const useModalValue = () => useContext(ModalValueContext);
export const useModalActions = () => useContext(ModalActionsContext);
