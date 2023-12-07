import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";

function Notification({ show, text, children, good }) {
  const [_show, setShow] = useState(false);

  useEffect(() => {
    setShow(show);
  }, [show]);

  if (!_show) return <></>;

  return (
    <div>
      <Alert
        vairant={good ? "success" : "danger"}
        onClose={() => setShow(false)}
        dismissible
      >
        {text || children}
      </Alert>
    </div>
  );
}

export default Notification;
