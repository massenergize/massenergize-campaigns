import { BubblyBalloonContext } from "./bubbly-balloon-context";
import { useContext } from "react";

export function useBubblyBalloons () {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [ store, dispatch ] = BubblyBalloonContext ? useContext(BubblyBalloonContext) : [ [], () => {} ];

  const deflate = (id) => {
    dispatch({
      type: 'REMOVE',
      payload: { id, }
    });
  }

  function balloon ({ title, message, type, timeout = 5000, duration = 5000 }) {
    const id = Math.random().toString(36).substring(2, 9);

    if (!timeout && duration) {
      timeout = duration;
    }

    dispatch({
      type: 'ADD',
      payload: {
        id,
        title,
        message,
        type,
        timeout,
      }
    });


/*    if (timeout) {
      let timer;
      timer = setTimeout(() => {
        deflate(id);
        clearTimeout(timer);
      }, timeout);
    }*/

    return id;
  }


  return {
    balloons :store,
    deflate,
    balloon,
    inflate : balloon,
    pop : balloon,
    create : balloon,
    notify : balloon,
    removeNotification : deflate,
    blow : balloon
  }
}
