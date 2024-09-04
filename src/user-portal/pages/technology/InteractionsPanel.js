import { Tooltip } from "bootstrap";
import React, { useEffect, useState } from "react";

const interactions = [
  { icon: "fa-heart", name: "Likes", count: 1345 },
  { icon: "fa-comment", name: "Comments", count: 185 },
  { icon: "fa-eye", name: "Views", count: 3542 },
  // { icon: "fa-share", name: "Shares", count: 15 },
];
function InteractionsPanel({ openCommentBox, likes, views, comments, openShareBox, like, liked, staticT }) {
  const [hasLiked, setHasLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    setLikeCount(likes);
  }, [likes, liked]);

  const doLike = () => {
    setLikeCount(hasLiked ? likeCount - 1 : likeCount + 1);
    like();
  };

  const commonTheme = {
    // color: "var(--app-main-color)",
    color: "black",
    // fontWeight:'bold'
  };

  return (
    <div className="mt-3 body-font int-panel" style={{}}>
      <div
        onClick={() => {
          doLike();
        }}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          margin: "0px 10px",
        }}
      >
        <i className={`fa fa-heart interact`} style={{ marginRight: 6, ...commonTheme }} />

        <small className="touchable-opacity" style={{ fontWeight: "bold", ...commonTheme }}>
          {`${likeCount ? likeCount : ""} `}
          <span className="phone-vanish">{`${
            !likeCount || likeCount === 1 ? staticT?.like?.text || " Like" : staticT?.like?.plural || " Likes"
          }`}</span>
        </small>
      </div>
      <div
        onClick={() => openCommentBox && openCommentBox()}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          margin: "0px 10px",
        }}
      >
        <i className={`fa fa-comments interact`} style={{ marginRight: 6, ...commonTheme }} />
        <small
          className="touchable-opacity"
          style={{ fontWeight: "bold", textDecoration: "underline", ...commonTheme }}
        >
          {`${comments ? comments : ""}`}
          <span className="phone-vanish">{`${
            !comments || comments === 1 ? staticT?.comment?.text || " Comment" : staticT?.comment?.plural || " Comments"
          }`}</span>
        </small>
      </div>
      {views ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            margin: "0px 10px",
          }}
        >
          <i className={`fa fa-eye`} style={{ marginRight: 6, ...commonTheme }} />
          <small style={{ fontWeight: "bold", ...commonTheme }}>
            {views}{" "}
            <span className="phone-vanish">
              {views === 1 ? staticT?.view?.text || " View" : staticT?.view?.plural || "Views"}
            </span>
          </small>
        </div>
      ) : (
        <></>
      )}

      <div
        className="touchable-opacity"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          margin: "0px 10px",
        }}
        onClick={() => openShareBox()}
      >
        <i className={`fa fa-share`} style={{ marginRight: 6, ...commonTheme }} />
        <small style={{ fontWeight: "bold", textDecoration: "underline", ...commonTheme }}>
          {staticT?.share?.text || "Share"}
        </small>
      </div>

      {/* {interactions.map((inter, index) => {
        return (
          <div
            key={index?.toString()}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              margin: "0px 10px",
            }}
          >
            <i
              className={`fa ${inter.icon} interact`}
              style={{ marginRight: 6, color: "var(--app-deep-green)" }}
            />
            <small
              className="touchable-opacity"
              style={{ fontWeight: "bold", textDecoration: "underline" }}
            >
              {inter.count} {inter.name}
            </small>
          </div>
        );
      })} */}
    </div>
  );
}

export default InteractionsPanel;
