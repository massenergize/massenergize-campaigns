import { format, isSameDay, parseISO } from "date-fns";

export function formatTimeRange(startDateString, endDateString) {
  const startDate = parseISO(startDateString);
  const endDate = parseISO(endDateString);

  if (isSameDay(startDate, endDate)) {
    const formattedStartDate = format(startDate, "do MMMM yyyy");
    const formattedStartTime = format(startDate, "HH:mm");
    const formattedEndTime = format(endDate, "HH:mm");

    return `${formattedStartDate} ${formattedStartTime} - ${formattedEndTime}`;
  } else {
    const formattedStartDate = format(startDate, "do MMMM yyyy");
    const formattedEndDate = format(endDate, "do MMMM yyyy");

    return `${formattedStartDate} - ${formattedEndDate}`;
  }
}