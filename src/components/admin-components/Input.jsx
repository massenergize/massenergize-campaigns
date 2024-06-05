import React from "react";
import "../../assets/styles/styles.scss";
import classes from "classnames";
import MERichText from "./RichText";

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
  inputType
}) => {
  const inputProps = {
    id: id || name,
    name: name || id,
    className: classes(type === "date" ? "date-input" : "input", {
      "border-danger": error,
      disabled,
    }),
    placeholder,
    required,
    disabled,
    type: !inputType ? "text" : inputType,
    maxLength,
    value,
    ...(format && { format }),
    onChange: (e) => {
      onChange(e.target.value);
    },
  };

  const renderField = () => {
    switch (type) {
      case "textarea":
        return (
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
        );

      case "richText":
        return (
          <MERichText
            label={label}
            placeholder={placeholder}
            required={required}
            onEditorChange={(val, _) => {
              onChange(val);
            }}
            value={value}
          />
        );
      default:
        return <input {...inputProps} />;
    }
  };
  return (
    <div className="input-container">
      {type !== "richText" && (
        <label htmlFor={id} className={classes("text", { disabled })}>
          {label} {required && "*"}
        </label>
      )}

      {renderField()}
      {error && typeof error === "string" ? <small className="text-danger">{error}</small> : null}
    </div>
  );
};
export default Input;
