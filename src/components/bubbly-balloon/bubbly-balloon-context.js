import { createContext, useReducer, useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import classes from "classnames";

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      console.log("adding balloon", action.payload);
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

  return (
    <BubblyBalloonContext.Provider value={[state, dispatch]}>
      {children}

      <ToastContainer className="p-3" position={position} style={{ zIndex: 1000, position: "fixed", width: "unset" }}>
        {
          state.map(({ id, timeout, message, title, type }) => (
            <Toast key={id}
                   onClose={() => (deflate(id))}
                   bg={type}
                   variant={type}
                   show={true}
                   delay={timeout}
                   autohide={timeout}>
              {
                title && <Toast.Header style={{
                  backgroundColor : "transparent"
                }} className={classes("border-bottom-0 justify-content-between", {
                  "text-light" : type !== "light" || type !== "white" || type !== "warning",
                })}>
                  <strong className="mr-auto">{title}</strong>
                </Toast.Header>
              }
              {message && <Toast.Body className={classes({
                "text-light" : type !== "light" || type !== "white" || type !== "warning",
              })}>
                {message}
              </Toast.Body>}
            </Toast>
          ))
        }
      </ToastContainer>
    </BubblyBalloonContext.Provider>
  )
}

export { BubblyBalloonContext, BubblyBalloonConsumer, reducer, initialState }

export default BubblyBalloonProvider;
