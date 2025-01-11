import type { ReactNode } from "react";

export type ModalProps = {
  children: ReactNode;
  onClose: () => void;
};

export const Modal = ({ children, onClose }: ModalProps) => (
  <div className="modal-backdrop" onClick={onClose}>
    <dialog
      className="modal"
      open
      onClick={(event) => {
        event.stopPropagation();
      }}
    >
      {children}
    </dialog>
  </div>
);
