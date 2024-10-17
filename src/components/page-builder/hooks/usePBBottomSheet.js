import React, { useCallback, useState } from "react";
import PBBottomSheet from "../components/bottom-sheet/PBBottomSheet";

export const usePBBottomSheet = () => {
  const [open, setOpen] = useState(false);
  const [sheetOptions, setSheetOptions] = useState({});

  const close = () => setOpen(false);
  const openModal = () => setOpen(true);

  const init = useCallback(({ sheetOptions, open }) => {
    setSheetOptions(sheetOptions);
    setOpen(open || false);
  }, []);
  const Sheet = useCallback(
    ({ children }) => {
      if (!open) return null;
      return (
        <PBBottomSheet close={close} {...(sheetOptions || {})}>
          {children}
        </PBBottomSheet>
      );
    },
    [open, sheetOptions],
  );
  return { init, close, isOpen: open, BottomSheet: Sheet, open: openModal };
};
