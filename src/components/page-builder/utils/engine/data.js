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
