import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";

function Notification({ show, text, children, good }) {
  const [_show, setShow] = useState(false);

  console.log("Make I see show", _show)

  useEffect(() => {
    setShow(show);
    console.log("Now it is in the show", show)
  }, [show]);

  if (!_show) return <></>;

  return (
    <div>
      <Alert
        variant={good ? "success" : "danger"}
        onClose={() => setShow(false)}
        dismissible
      >
        {text || children}
      </Alert>
    </div>
  );
}

export default Notification;
