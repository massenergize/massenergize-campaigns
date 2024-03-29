import React, { useState } from "react";
import "../../assets/styles/styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Spinner } from "react-bootstrap";

const Button = ({
  text,
  onSubmit,
  onClick,
  rounded,
  icon,
  loading = false,
  children
}) => {
  // const [loader, setLoader] = useState(false);
  return (
    <button
      type="button"
      onClick={(e) => {
        if (onClick) return onClick(e);
        onSubmit && onSubmit(e);
      }}
      className={rounded ? `btn-rounded btn-n ` : `btn-fixed btn-n`}
    >
      {loading && <Spinner size="sm" style={{ marginRight: 6 }} />}
      <span> {icon && <FontAwesomeIcon icon={icon} />} </span>{" "}
      {!loading && <span>{text || children}</span>}
    </button>
  );
};

export default Button;
