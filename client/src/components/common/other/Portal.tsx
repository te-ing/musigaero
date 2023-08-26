import { ReactNode } from "react";
import ReactDom from "react-dom";

type TProps = {
  children: ReactNode;
};

export default function Portal({ children }: TProps) {
  return ReactDom.createPortal(children, document.getElementById("modal") as HTMLElement);
}
