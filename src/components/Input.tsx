import { InputHTMLAttributes } from "react";
import classes from "classnames";

export function Input ({ className = "", type = "text", ...rest} : InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input type={type} className={classes("form-control", className)} {...{...rest}}/>
  )
}
