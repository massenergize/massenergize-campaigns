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
               }) => {
  return (
    <div className="input-container">
      <label htmlFor={id} className="text">
        {label} {required && "*"}
      </label>
      {
        type === "textarea" ? (
          <textarea
            id={id || name}
            name={name || id}
            placeholder={placeholder}
            className="input-textarea"
            required={required}
            onChange={(e) => {onChange(e.target.value);}}
            maxLength={maxLength}
            value={value}
          />
        ) : <input
          id={id || name}
          name={name || id}
          type={type === "textbox" ? "text" : type}
          placeholder={placeholder}
          className={classes(type === "date" ? "date-input" : "input")}
          required={required}
          onChange={(e) => {onChange(e.target.value);}}
          maxLength={maxLength}
          value={value}
        />
      }
    </div>
  );
};

export default Input;
