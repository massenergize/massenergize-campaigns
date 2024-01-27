import { format, formatDistanceToNow, isSameDay, parseISO } from "date-fns";

export function formatTimeRange(startDateString, endDateString) {
  if (!startDateString || !endDateString) return "";
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

export function relativeTimeAgo(datetimeString) {
  const date = parseISO(datetimeString);

  return formatDistanceToNow(date, { addSuffix: true });
}

export const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return emailRegex.test(email);
};

export function fetchUrlParams(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name) || "";
}

export function getLastSegmentFromUrl(url) {
  const parsedUrl = new URL(url);
  const pathnameSegments = parsedUrl.pathname.split("/").filter(Boolean);

  if (pathnameSegments.length > 0) {
    return pathnameSegments[pathnameSegments.length - 1];
  }

  return null; // Return null if no segments are found
}

export function addUrlParams(currentUrl, params) {
  const url = new URL(currentUrl);
  const searchParams = new URLSearchParams(url.search);

  Object.keys(params).forEach((key) => {
    searchParams.set(key, params[key]);
  });

  return url.pathname + "?" + searchParams.toString();
}

export function generateUniqueRandomString(length) {
  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  // Adding a timestamp to make it more unique
  const timestamp = new Date().getTime();
  result += timestamp.toString();

  return result;
}
export function smartString(inputString, maxLength = 30) {
  if (typeof inputString !== "string" || typeof maxLength !== "number" || maxLength <= 0) {
    console.error("Invalid input. Please provide a valid string and a positive number of characters.");
    return "";
  }

  if (inputString.length <= maxLength) {
    return inputString;
  }

  return inputString.slice(0, maxLength) + "...";
}

export const portalIsAdmin = () => {
  const url = window.location.href;
  return url.includes("admin/");
};

export function mergeArrays(arrays, reducer) {
  const mergedArray = [];

  for (const array of arrays) {
    for (const obj of array) {
      let isDuplicate;

      if (reducer) mergedArray.find((item) => reducer(item, obj));
      else mergedArray.find((item) => item.id === obj.id);
      if (!isDuplicate) {
        mergedArray.push(obj);
      }
    }
  }
  return mergedArray;
}

export const setPageTitle = (name) => {
  if (!name) return;
  document.title = name;
};

export function truncateRichText(richText, maxHeight) {
  // Create a temporary div element to hold the parsed rich text
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = richText;

  document.body.appendChild(tempDiv);
  // Get the height of the content in the temporary div
  const contentHeight = tempDiv.offsetHeight + 40;
  var isLong = false;


  // If the content height is within the specified limit, no need to truncate
  if (contentHeight <= maxHeight) {
    document.body.removeChild(tempDiv);
    console.log("Its coming inside here mom ooo");
    return { truncatedContent: richText, isLong };
  }

  // Iterate through the child nodes to find the point to truncate
  let currentHeight = 0;
  let truncatedContent = "";
  isLong = true;

  for (const childNode of tempDiv.childNodes) {
    const nodeHeight = childNode.offsetHeight;

    // Check if adding this node exceeds the maxHeight
    if (currentHeight + nodeHeight <= maxHeight) {
      truncatedContent += childNode.outerHTML;
      currentHeight += nodeHeight;
    } else {
      // Truncate the text within this node to fit the remaining height
      const remainingHeight = maxHeight - currentHeight;
      const truncatedText = truncateText(childNode.textContent, remainingHeight);
      truncatedContent += `<div style="overflow: hidden; text-overflow: ellipsis; max-height: ${remainingHeight}px;">${truncatedText}</div>`;
      break;
    }
  }

  return { truncatedContent, isLong };
}

function truncateText(text, maxLength) {
  // Truncate the text to fit within the specified maxLength
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
}

export const objHasContent = (obj) => {
  if (!obj) return false;
  return Object.keys(obj || {}).length > 0;
};


export function findItemAtIndexAndRemainder(arr, comparator) {
  for (let i = 0; i < arr.length; i++) {
      if (comparator(arr[i])) {
          const foundItem = arr[i];
          const remainder = arr.slice(i + 1);
          return { item: foundItem, remainder, index: i };
      }
  }
  // If the item is not found, return null
  return null;
}