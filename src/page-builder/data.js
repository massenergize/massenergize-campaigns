export const dummySection = {
  container: { type: "div", props: { className: "container", style: { background: "red", padding: 20 } } },
  direction: "x",
  elements: [
    {
      container: { type: "div", props: { className: "container" } },
      direction: "y",
      elements: [
        {
          container: { type: "div", props: { className: "container" } },
          direction: "x",
          elements: [
            { type: "img", props: { src: "https://via.placeholder.com/150" } },
            { type: "p", props: { style: { fontWeight: "bold", color: "red" } } },
          ],
        },
      ],
    },
    {
      container: { type: "div", props: { className: "container" } },
      direction: "y",
      elements: [{ type: "img", props: { src: "https://via.placeholder.com/150" } }],
    },
  ],
};

/**
 * Look for the following in this order:
 * container -> direction -> elements -> container -> direction -> elements -> type
 *
 */
