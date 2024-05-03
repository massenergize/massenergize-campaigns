import React from "react";
import { GoogleCalendar } from "datebook";

import { stateAbbreviation } from "../../../utils/utils";

const AddToGoogleCalendar = ({ data }) => {
  const locationFormat = (location) => {
    if (!location) return "";
    let firstLine =
      location.unit && location.unit !== ""
        ? `${location.address || ""}, ${location.unit}`
        : `${location.address || ""}`;
    const state = location.state ? stateAbbreviation(location.state) : "";

    return `${firstLine}${location.city ? `, ${location.city}` : ""}${state ? `, ${state}` : ""}`;
  };

  const handleAddEventToGoogleCalendar = () => {
    const googleCalendar = new GoogleCalendar({
      title: data?.name,
      location: locationFormat(data?.location),
      description: data?.featured_summary,
      start: new Date(data?.start_date_and_time),
      end: new Date(data?.end_date_and_time),
      url: window.location.href,
    });
    const link = googleCalendar.render();
    window.open(link, "_blank");
  };

  return (
    <div
      onClick={() => handleAddEventToGoogleCalendar()}
      className="mt-2 touchable-opacity normal-btn"
      style={{ background: "#ff4b00", width: "100%" }}
    >
      <p style={{ margin: 0 }}>
        <i className="fa fa-calendar" style={{ marginRight: 0 }} /> Google Calendar
      </p>
    </div>
  );
};

export default AddToGoogleCalendar;
