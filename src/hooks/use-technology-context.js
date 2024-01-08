import { useContext, } from "react";
import { TechnologyContext } from "../contexts/technology-context";

export const useTechnologyContext = () => {
  const [state, dispatch] = useContext(TechnologyContext);

  const handleTechnologyDetailsChange = (name, value) => {
    dispatch({ type: "SET_FIELD_VALUE", payload: { field: name, value } });
  };

  const setNewTechnologyDetails = (payload) => {
    dispatch({ type: "NEW_TECHNOLOGY", payload });
  }

  return {
    state,
    technology : state,
    handleTechnologyDetailsChange,
    setNewTechnologyDetails,
  }
}
