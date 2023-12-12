import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import Loading from "../../../components/pieces/Loading";
import { relativeTimeAgo } from "../../../utils/utils";
import Notification from "../../../components/pieces/Notification";

function CommentComponentForModal({ comments }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  const sendComment = () => {
    if (!comment.trim() || !name.trim())
      return setError("Please provide a name and a valid comment");
  };
  return (
    <div style={{ maxHeight: 500, position: "relative" }}>
      <div
        style={{
          padding: 20,
          overflowY: "scroll",
          height: 500,
          paddingBottom: 130,
        }}
      >
        {comments?.map((com, index) => {
          const { user, text, created_at } = com || {};
          const message = text || "...";
          const community = user?.community;
          return (
            <div
              className="mb-2 mt-1 pb-2"
              style={{ border: "solid 0px #f5f5f5", borderBottomWidth: 1 }}
              key={index?.toString()}
            >
              <h6
                style={{
                  textDecoration: "underline",
                  fontSize: 14,
                }}
              >
                <span style={{ color: "var(--app-deep-green)" }}>
                  {user?.full_name}{" "}
                </span>{" "}
                {community && " from "}
                <span style={{ color: "var(--app-medium-green)" }}>
                  {community}{" "}
                </span>
              </h6>
              <small>{message}</small>
              <small
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <span style={{ marginLeft: "auto", color: "#cbcbcb" }}>
                  {relativeTimeAgo(created_at)}
                </span>
              </small>
            </div>
          );
        })}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          padding: "10px 20px",
          background: "white",
          borderBottomRightRadius: 5,
          borderBottomLeftRadius: 5,
        }}
      >
        <div>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Your Name</InputGroup.Text>
            <Form.Control
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Who is making this comment?..."
              aria-label="text"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </div>
        <InputGroup className="mb-3">
          <Form.Control
            onChange={(e) => setComment(e.target.value)}
            placeholder="Type comment here..."
            aria-label="User comment"
            aria-describedby="basic-addon2"
          />
          <Button
            variant="outline-success"
            id="button-addon2"
            onClick={() => sendComment()}
          >
            Comment
          </Button>
        </InputGroup>

        <Notification show={error} good={!error}>
          {error}
        </Notification>
      </div>
    </div>
  );
}

export default CommentComponentForModal;
