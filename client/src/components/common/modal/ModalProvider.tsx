import React, { ReactElement, createContext, useContext, useMemo, useState } from "react";
import Alert from "./Alert";
import Toast from "./Toast";

export interface Modal {
  id: string;
  type: string;
}

export interface AlertType extends Modal {
  type: "alert";
  title?: string;
  message: string;
  isOpen: boolean;
  onClose?: () => void;
}
export interface ToastType extends Modal {
  type: "toast";
  message: string;
  isOpen: boolean;
  duration?: number;
  onClose: () => void;
}

export interface ModalContextValueType {
  alerts: AlertType[];
  toasts: ToastType[];
}
export interface ModalContextActionsType {
  setAlerts: React.Dispatch<React.SetStateAction<AlertType[]>>;
  setToasts: React.Dispatch<React.SetStateAction<ToastType[]>>;
}

export const ModalValueContext = createContext<ModalContextValueType>({
  alerts: [],
  toasts: [],
});
export const ModalActionsContext = createContext<ModalContextActionsType>({
  setAlerts: () => {},
  setToasts: () => {},
});

export function ModalProvider({ children }: { children: ReactElement }) {
  const [alerts, setAlerts] = useState<AlertType[]>([]);
  const [toasts, setToasts] = useState<ToastType[]>([]);

  const values = useMemo(() => {
    return { alerts, toasts };
  }, [alerts, toasts]);

  const actions = useMemo(() => {
    return {
      setAlerts,
      setToasts,
    };
  }, [setAlerts, setToasts]);

  return (
    <ModalActionsContext.Provider value={actions}>
      <ModalValueContext.Provider value={values}>
        {children}
        {alerts[0] && <Alert {...alerts[0]} />}
        {toasts[0] && <Toast {...toasts[0]} />}
      </ModalValueContext.Provider>
    </ModalActionsContext.Provider>
  );
}

export const useModalValue = () => useContext(ModalValueContext);
export const useModalActions = () => useContext(ModalActionsContext);
