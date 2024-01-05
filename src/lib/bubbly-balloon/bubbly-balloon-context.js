import { createContext, useReducer, useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import classes from "classnames";

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':

      return [...state, action.payload];
    case 'REMOVE':
      return state.filter(b => b.id !== action.payload.id);
    default:
      return state;
  }
}

const initialState = [
/*  {
    title: "Success",
    message: "Campaign information saved successfully",
    type: "success",
    duration: 5000,
  }*/
];

const BubblyBalloonContext = createContext(initialState);
const BubblyBalloonConsumer = BubblyBalloonContext.Consumer;

function BubblyBalloonProvider ({ children }) {
  const [position, setPosition] = useState('bottom-end');
  const [state, dispatch] = useReducer(reducer, []);

  const deflate = (id) => {
    dispatch({ type: 'REMOVE', payload: { id, } });
  }

  const TYPE_MAP = {
    primary: {
      variant: "primary",
      bg: "primary",
      color : "white",
    },
    success: {
      variant: "success",
      bg: "success",
      color : "white",
    },
    error: {
      variant: "danger",
      bg: "danger",
      color : "white",
    },
    warning: {
      variant: "warning",
      bg: "warning",
      color : "dark",
    },
    info: {
      variant: "info",
      bg: "info",
      color : "white",
    },
    danger: {
      variant: "danger",
      bg: "danger",
      color : "white",
    },
    default: {
      variant: "light",
      bg: "light",
      color : "dark",
    },
    light: {
      variant: "light",
      bg: "light",
      color : "dark",
    },
    dark: {
      variant: "dark",
      bg: "dark",
      color : "white",
    },
  }

  return (
    <BubblyBalloonContext.Provider value={[state, dispatch]}>
      {children}

      <ToastContainer className="p-3" position={position} style={{ zIndex: 1000, position: "fixed", width: "unset" }}>
        {
          state.map(({ id, timeout, message, title, type, onClose }) => {
            const { variant, bg, color } = TYPE_MAP[type] || TYPE_MAP.default;
            return (
              <Toast key={id}
                     onClose={() => {
                       deflate(id);
                       typeof onClose === "function" && onClose(id);
                     }}
                     bg={bg}
                     variant={variant}
                     show={true}
                     delay={timeout}
                     autohide={timeout}>
                {
                  title && <Toast.Header style={{
                    backgroundColor: "transparent"
                  }} className={classes("border-bottom-0 justify-content-between", `text-${color}`, {})}>
                    <strong className="mr-auto">{title}</strong>
                  </Toast.Header>
                }
                {message && <Toast.Body className={classes(`text-${color}`, {})}>
                  {message}
                </Toast.Body>}
              </Toast>
            )
          })
        }
      </ToastContainer>
    </BubblyBalloonContext.Provider>
  )
}

export { BubblyBalloonContext, BubblyBalloonConsumer, reducer, initialState }

export default BubblyBalloonProvider;
