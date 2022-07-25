import React, { ReactNode } from "react";
import { createPortal } from "react-dom";

import "./modal.css";

interface ModalProps {
  onClick: () => void;
  children: ReactNode;
}

export default function Modal(props: ModalProps): JSX.Element {
  return createPortal(
    <div className="modal" onClick={props.onClick}>
      {props.children}
    </div>,
    document.getElementById("modal_root")!
  );
}
