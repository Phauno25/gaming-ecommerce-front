import { ReactNode } from "react";

export type ModalProps = {
  children?: ReactNode;
  onClose?: (e: any) => void;
  isOpen: boolean;
  title: string;
};
