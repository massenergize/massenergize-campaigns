import {useContext} from "react";
import {DiceyDialogContext} from "./dicey-dialog-context";

export function useDiceyDialog () {
  const {state, dispatch} = useContext(DiceyDialogContext);
}
