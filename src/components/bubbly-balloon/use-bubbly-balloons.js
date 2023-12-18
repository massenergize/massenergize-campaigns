import {BubblyBalloonContext} from "./bubbly-balloon-context";
import { useContext } from "react";

export function useBubblyBalloons() {


  const [balloons, setBalloons, deflate] = useContext(BubblyBalloonContext);

  const inflate = balloon;
  const notify = balloon;
  const blow = balloon;
  const create = balloon;

  const pop = deflate;

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
  // const { balloon, deflate, inflate, pop, create, notify, blow } = useContext(BubblyBalloonContext);

  return { balloon, deflate, inflate, pop, create, notify, blow }
}
