export const SECTION_BLOCK = {
  element: {
    id: new Date().getMilliseconds(),
    type: "div",
    props: { className: "first-container", style: { background: "red", padding: 20 } },
  },
  direction: "x",
  content: [
    {
      element: { id: new Date().getMilliseconds(), type: "div", props: { className: "container" } },
      direction: "y",
      content: [
        {
          element: { id: new Date().getMilliseconds(), type: "div", props: { className: "container" } },
          direction: "x",
          content: [
            {
              element: {
                id: new Date().getMilliseconds(),
                type: "img",
                props: { src: "https://via.placeholder.com/150", alt: "Placeholder content" },
              },
            },
            {
              element: {
                id: new Date().getMilliseconds(),
                text: "The frog is playing piano",
                type: "p",
                props: { style: { fontWeight: "bold", color: "white" } },
              },
            },
          ],
        },
      ],
    },
    {
      element: { id: new Date().getMilliseconds(), type: "div", props: { className: "container" } },
      direction: "y",
      content: [
        {
          element: {
            id: new Date().getMilliseconds(),
            type: "img",
            props: {
              src: "https://via.placeholder.com/50",
              style: { borderRadius: "50%" },
              alt: "Other image placeholder",
            },
          },
        },
      ],
    },
  ],
};

export const TITLE_BLOCK = {
  element: {
    id: new Date().getMilliseconds(),
    type: "div",
    props: { style: { background: "antiquewhite", padding: 10 } },
  },
  direction: "y",
  content: [
    {
      element: { id: new Date().getMilliseconds(), type: "h2", text: "New title here..." },
    },
    {
      element: { id: new Date().getMilliseconds(), type: "p", text: "Latest paragraph..." },
    },
  ],
};
export const PARAGRAPH_BLOCK = {
  element: {
    id: new Date().getMilliseconds(),
    type: "p",
    props: { style: { background: "whitesmoke", padding: 10, margin: 0 } },
    text: "Start adding your paragraph here...",
  },
};
export const BTN_BLOCK = {
  element: {
    id: new Date().getMilliseconds(),
    type: "button",
    props: { className: "pb-block-btn touchable-opacity", style: {} },
    text: "Click Me",
  },
};
export const IMAGE_BLOCK = {
  element: {
    id: new Date().getMilliseconds(),
    type: "img",
    props: { style: { padding: 10 }, src: "https://via.placeholder.com/150", alt: "Placeholder content" },
  },
};
export const VIDEO_BLOCK = {
  element: {
    id: new Date().getMilliseconds(),
    type: "video",
    props: { style: { padding: 10 }, src: "https://www.youtube.com/watch?v=J3oijWs-dCs", alt: "Placeholder content" },
  },
};
export const LINK_BLOCK = {
  element: {
    id: new Date().getMilliseconds(),
    type: "link",
    text: "Here is a link, change the url in right panel...",
    props: { style: { padding: 10 }, href: "https://www.youtube.com/watch?v=J3oijWs-dCs", target: "_blank" },
  },
};
export const ICON_BLOCK = {
  element: {
    id: new Date().getMilliseconds(),
    type: "icon",
    props: { style: { color: "#0b9edc" } },
  },
};
