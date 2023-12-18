import { createContext, useEffect, useReducer, useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';


export const BubblyBalloonContext = createContext({});

export function BubblyBalloonProvider ({ children }) {
  const [position, setPosition] = useState('bottom-end');
  const [balloons, setBalloons] = useReducer((state, action) => {
    switch (action.type) {
      case 'ADD':
        console.log("adding balloon", action.payload);
        return [...state, action.payload];
      case 'REMOVE':
        return state.filter(b => b.id !== action.payload.id);
      default:
        return state;
    }
  }, []);

  const [toast, setToast] = useState({
    show: true,
    title: "",
    message: "",
    type: "",
  });

  const toggleToast = () => {
    setToast({
      ...toast,
      show: !toast.show,
    });
  }

  function balloon ({ title, message, type, timeout = 5000 }) {
    const id = Math.random().toString(36).substring(2, 9);
    setBalloons({
      type: 'ADD',
      payload: {
        id,
        title,
        message,
        type,
        timeout,
      }
    });


    if (timeout) {
      let timer;
      timer = setTimeout(() => {
        deflate(id);
        clearTimeout(timer);
      }, timeout);
    }

    return id;
  }

  const deflate = (id) => {
    setBalloons({
      type: 'REMOVE',
      payload: {
        id,
      }
    });
  }

  useEffect(() => {
    console.log("rendering balloons", balloons)
  }, []);

  return (
    <BubblyBalloonContext.Provider value={[balloons, setBalloons, deflate]}>
      {children}

      {/*<ToastContainer className="p-3" position={position} style={{ zIndex: 1 }}>
        {
          balloons.map(({ id, timeout, message, title }) => (
            <Toast key={id} onClose={() => (deflate(id))} show={true} delay={timeout} autohide={!!timeout}>
              {title && <Toast.Header><strong className="mr-auto">{title}</strong></Toast.Header>}
              {message && <Toast.Body>{message}</Toast.Body>}
            </Toast>
          ))
        }
      </ToastContainer>*/}
    </BubblyBalloonContext.Provider>
  )
}
