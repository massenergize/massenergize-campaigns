import { useContext, } from "react";
import { TechnologyContext } from "../contexts/technology-context";

export const useTechnologyContext = () => {
  const [state, dispatch] = useContext(TechnologyContext);

  const handleTechnologyDetailsChange = (name, value) => {
    dispatch({ type: "SET_FIELD_VALUE", payload: { field: name, value } });
  };

  const handleOverviewChange = (name, value) => {
    dispatch({ type: "SET_OVERVIEW", payload: value });
  };

  const handleAddOverview = (payload) => {
    dispatch({ type: "ADD_OVERVIEW", payload });
  }

  const handleRemoveOverview = (payload) => {
    dispatch({ type: "REMOVE_OVERVIEW", payload });
  }

  const handleUpdateOverview = (payload) => {
    dispatch({ type: "UPDATE_OVERVIEW", payload });
  }

  const setNewTechnologyDetails = (payload) => {
    dispatch({ type: "NEW_TECHNOLOGY", payload });
  }

  return {
    state,
    technology : state,
    handleAddOverview,
    handleRemoveOverview,
    handleUpdateOverview,
    handleOverviewChange,
    handleTechnologyDetailsChange,
    setNewTechnologyDetails,
  }
}
