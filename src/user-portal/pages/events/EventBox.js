import React from "react";
import { useNavigate } from "react-router-dom";
import { formatTimeRange, smartString } from "../../../utils/utils";

function EventBox({ event, campaign_technology }) {
  const { campaign } = campaign_technology || {};

  const { name, image, start_date, end_date, id } = event || {};
  const navigator = useNavigate();

  return (
    <div
      className="elevate-float-pro"
      style={{
        borderRadius: 10,
        background: "white",
        minHeight: 300,
        marginBottom: 20,
      }}
    >
      {image?.url && (
        <img
          style={{
            width: "100%",
            height: 180,
            objectFit: "cover",
            borderRadius: 5,
          }}
          src={image?.url}
          alt={"event"}
        />
      )}
      <div style={{ padding: "15px 15px" }}>
        <h6
          className="touchable-opacity"
          role={"button"}
          tabIndex={0}
          onClick={() => navigator(`/campaign/${campaign?.slug}/technology/event/${id}`)}
          style={{ textDecoration: "underline" }}
        >
          {smartString(name, 50) || "..."}
          <i className="fa fa-long-arrow-right" style={{ marginLeft: 10, color: "var(--app-accent-3)" }} />
          {/* <span
            style={{
              marginLeft: 7,
              color: "var(--app-medium-green)",
              textDecoration: "underline",
            }}
          >
            See More...
          </span> */}
        </h6>

        <p
          style={{
            marginTop: 15,
            fontWeight: "bold",
            color: "var(--app-accent-3)",
          }}
        >
          <i className="fa fa-clock-o" /> <span> {formatTimeRange(start_date, end_date)}</span>
        </p>
      </div>
    </div>
  );
}

export default EventBox;
