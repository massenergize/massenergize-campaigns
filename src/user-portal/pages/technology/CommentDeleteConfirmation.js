import React, { useEffect, useState } from "react";

function CommentDeleteConfirmation({ onDelete, show }) {
  const [isDeleting, setIsDeleting] = useState(false);

  if (!show) return <></>;
  const common = {
    fontWeight: "bold",
    margin: "0px 10px",
    color: "green",
    textDecoration: "underline",
  };
  if (isDeleting)
    return (
      <span>
        <span>Are you sure? </span>
        <span
          onClick={() => onDelete && onDelete()}
          className="touchable-opacity"
          style={{ ...common }}
        >
          YES
        </span>
        <span
          className="touchable-opacity"
          onClick={() => setIsDeleting(false)}
          style={{ ...common, color: "#a52424" }}
        >
          NO
        </span>
      </span>
    );

  return (
    <span
      onClick={() => setIsDeleting(true)}
      className="touchable-opacity"
      style={{
        textDecoration: "underline",
        color: "#a52424",
        // marginLeft: 10,
        fontWeight: "bold",
      }}
    >
      Delete{" "}
    </span>
  );
}

export default CommentDeleteConfirmation;
