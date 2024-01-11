import React from "react";
import "../../assets/styles/styles.scss";
import classes from "classnames";

const Input = ({
                 id,
                 name,
                 label,
                 placeholder,
                 required,
                 type = "text",
                 onChange,
                 maxLength,
                 value,
                 error,
                 format,
                 disabled,
               }) => {
  const inputProps = {
    id: id || name,
    name: name || id,
    className: classes(type === "date" ? "date-input" : "input",
      { "border-danger": error, disabled }),
    placeholder,
    required,
    disabled,
    type : type === "textbox" ? "text" : type,
    maxLength,
    value,
    ...(format && {format}),
    onChange: (e) => {
      onChange(e.target.value);
    },
  };
  return (
    <div className="input-container">
      <label htmlFor={id} className={classes("text", { disabled })}>
        {label} {required && "*"}
      </label>
      {
        type === "textarea" ? (
          <textarea
            id={id || name}
            name={name || id}
            placeholder={placeholder}
            className={classes("input-textarea", { "border-danger": error })}
            required={required}
            disabled={disabled}
            onChange={(e) => {
              onChange(e.target.value);
            }}
            maxLength={maxLength}
            value={value}
          />
        ) : <input {...inputProps} />
      }
      {
        (error && typeof error === "string") ? (
          <small className="text-danger">{error}</small>
        ) : null
      }
    </div>
  );
}
  ;

  export default Input;
