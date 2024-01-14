const { useRef, useState, useEffect } = require('react');

/**
 * This hook is used to create a state that is also available as a ref.
 * @param initialValue {*} - The initial value of the state
 * @returns {[unknown,React.MutableRefObject<unknown>,((value: unknown) => void)]}
 */
const useRefState = (initialValue) => {
  const [state, setState] = useState(initialValue);
  const stateRef = useRef(state);
  useEffect(() => {
    stateRef.current = state;
  }, [state]);
  return [state, stateRef, setState];
};

export default useRefState;
