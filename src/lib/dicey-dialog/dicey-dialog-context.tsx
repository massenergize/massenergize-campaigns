import React, {
  createContext,
  isValidElement,
  ReactElement,
  useReducer,
} from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "react-bootstrap";

const initialState = {
  dialogs: [],
  currentDialog: null,
};

type DialogContextType = {
  state: typeof initialState;
  dispatch: (action: { type: string; payload?: any }) => void;
};

interface IDialogContext {
  state: typeof initialState;
  dispatch: (action: { type: string; payload?: any }) => void;
}

const DiceyDialogContext = createContext({});

export enum DialogActionType {
  ADD_DIALOG = "ADD_DIALOG",
  REMOVE_DIALOG = "REMOVE_DIALOG",
  CLOSE_DIALOG = "CLOSE_DIALOG",
  SET_CURRENT_DIALOG = "SET_CURRENT_DIALOG",
}

interface IDialogAction {
  type: DialogActionType;
  payload?: any;
}

interface IDialog {
  id: string;
  title?: string;
  body?: ReactElement;
  footer?: ReactElement | Function | Array<any>;
  size?: "sm" | "md" | "lg" | "xl";
  show?: boolean;
}

interface IDialogState {
  dialogs: IDialog[];
  currentDialog: IDialog | null;
}

const dialogReducer = (state: IDialogState, action: IDialogAction) => {
  switch (action.type) {
    case DialogActionType.ADD_DIALOG:
      return {
        ...state,
        dialogs: [...state.dialogs, action.payload],
      };
    case DialogActionType.CLOSE_DIALOG:
      return {
        ...state,
        dialogs: state.dialogs.map((dialog) => {
          if (dialog.id === action.payload) {
            return { ...dialog, show: false };
          }
          return dialog;
        }),
      };
    case DialogActionType.REMOVE_DIALOG:
      return {
        ...state,
        dialogs: state.dialogs.filter((dialog) => dialog.id !== action.payload),
      };
    case DialogActionType.SET_CURRENT_DIALOG:
      return {
        ...state,
        currentDialog: action.payload,
      };
    default:
      return state;
  }
};

function DialogHeader ({ children }) {
  if (!children) return null;

  if (typeof children === "string") {
    return (
      <ModalHeader>
        <Modal.Title className={"text-sm"}>{children}</Modal.Title>
      </ModalHeader>
    );
  }
}

function DialogFooter ({ children }: { children: ReactElement | null | Function }) {
  if (!children) return null;

  if (isValidElement(children)) {
    return <ModalFooter>{children}</ModalFooter>;
  }

  if (typeof children === "function") {
    // render prop
    return <ModalFooter>{children()}</ModalFooter>;
  }

  if (Array.isArray(children)) {
    return (
      <ModalFooter>
        {children.map((child, index) => {
          const { variant = "primary", onClick, text } = child;
          return (
            <Button key={index} variant={variant} onClick={onClick}>
              {text}
            </Button>
          );
        })}
      </ModalFooter>
    );
  }

  return null;
}

export function DialogProvider ({ children }) {
  const [state, dispatch] = useReducer(dialogReducer, initialState);

  return (
    <DiceyDialogContext.Provider value={{ state, dispatch }}>
      {children}

      {state.dialogs.map((dialog) => {
        const { id, title, body, footer, size = "md", show } = dialog;
        return (
          <Modal
            key={id}
            size={size}
            show={show}
            onHide={() => dispatch({ type: DialogActionType.REMOVE_DIALOG, payload: id })}
          >
            <DialogHeader>{title}</DialogHeader>
            <ModalBody>{body}</ModalBody>
            <DialogFooter>{footer}</DialogFooter>
          </Modal>
        );
      })}
    </DiceyDialogContext.Provider>
  );
}

export { DiceyDialogContext };
