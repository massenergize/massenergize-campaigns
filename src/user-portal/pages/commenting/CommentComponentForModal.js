import React, { useEffect, useRef, useState } from "react";
import { Button, Form, InputGroup, Spinner } from "react-bootstrap";
import Loading from "../../../components/pieces/Loading";
import { relativeTimeAgo } from "../../../utils/utils";
import Notification from "../../../components/pieces/Notification";
import { apiCall } from "../../../api/messenger";

function CommentComponentForModal({
  comments,
  authUser,
  updateUser,
  camp_tech_id,
  technology,
  updateTechList,
}) {
  const [commentItems, setCommentItems] = useState([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const comBox = useRef();
  // comments = comments?.reverse();

  const { user } = authUser || {};

  useEffect(() => {
    setName(user?.full_name || "");
  }, []);
  useEffect(() => {
    // Scroll to the bottom whenever messages change
    const ref = comBox;
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [comments]);

  useEffect(() => {
    const { user } = authUser || {};
    setName(user?.full_name || user?.preferred_name || "");
  }, [authUser]);

  useEffect(() => {
    setCommentItems(comments?.reverse());
  }, [comments]);

  const data = commentItems;

  const sendComment = () => {
    setError("");
    if (!comment.trim() || !name?.trim())
      return setError("Please provide a name and a valid comment");

    const doesNotHaveName = !user?.full_name;
    setLoading(true);
    if (doesNotHaveName) {
      updateUser({ id: user?.id, full_name: name }, () =>
        sendCommentToBackend()
      );
    } else sendCommentToBackend();
  };

  const sendCommentToBackend = () => {
    apiCall("/campaigns.technologies.comments.create", {
      campaign_technology_id: technology?.campaign_technology_id,
      text: comment,
      user_id: user?.id,
    }).then((response) => {
      setLoading(false);
      if (!response || !response.success) return setError(response.error);
      const latestComments = response.data;
      const updated = { ...(technology || {}), comments: latestComments };
      setCommentItems(latestComments.reverse());
      updateTechList(updated);
      setComment("");

      // updatecommentList({ ...commentsList, [camp_tech_id]: latestComments });
    });
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
        ref={comBox}
      >
        {data?.map((com, index) => {
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
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Who is making this comment?..."
              aria-label="text"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </div>
        <div>
          <InputGroup className="mb-3">
            <Form.Control
              value={comment}
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
              {loading && <Spinner size="sm" style={{ marginRight: 5 }} />}
              Comment
            </Button>
          </InputGroup>
        </div>

        <Notification show={error} good={!error}>
          {error}
        </Notification>
      </div>
    </div>
  );
}

export default CommentComponentForModal;
