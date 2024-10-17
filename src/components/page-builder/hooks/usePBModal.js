import React, { useCallback, useEffect, useState } from "react";
import PBModal from "../components/modal/PBModal";

export const usePBModal = () => {
  const [open, setOpen] = useState(false);
  const [modalProps, setModalProps] = useState(null);

  const close = () => setOpen(false);
  const openModal = () => setOpen(true);

  const init = useCallback(({ modalProps, open }) => {
    setModalProps(modalProps);
    setOpen(open || false);
  }, []);

  const Modal = useCallback(
    ({ children }) => {
      if (!open) return null;
      return (
        <PBModal close={close} {...(modalProps || {})}>
          {children}
        </PBModal>
      );
    },
    [modalProps, open],
  );

  return { isOpen: open, Modal, close, init, open: openModal };
};
