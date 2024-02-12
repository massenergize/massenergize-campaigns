import React, { InputHTMLAttributes, useState } from "react";
import EventOutsideNotifier from "../EventOutsideNotifier";
import { Input } from "../Input";
import classes from "classnames";
import "./disguised-input.scss";

type InputEditOptions = "focus" | "hover" | "click" | "double-click" | "dbclick";

interface DisguisedInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  type?: string;
  editOn?: InputEditOptions;
  plainTextClassName?: string;
}

export function DisguisedInput(props: DisguisedInputProps) {
  const { className, plainTextClassName, editOn = "dbclick", ...rest } = props;
  const [isEditable, setIsEditable] = useState(false);

  const INPUT_PROPS = {
    className: classes("disguised-input", className, (!isEditable && plainTextClassName), {
      "editable form-control": isEditable,
    }),
    readOnly: !isEditable,
    ...(editOn === "focus" && { onFocus: () => setIsEditable(true) }),
    ...(editOn === "hover" && { onMouseEnter: () => setIsEditable(true) }),
    ...(editOn === "click" && { onClick: () => setIsEditable(true) }),
    ...((editOn === "double-click" || editOn === "dbclick") && { onDoubleClick: () => setIsEditable(true) }),
    ...rest,
  };

  return (
    <EventOutsideNotifier handler={() => setIsEditable(false)}>
      <input {...INPUT_PROPS} />
    </EventOutsideNotifier>
  );
}
