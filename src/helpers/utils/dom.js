import { scroller } from "react-scroll";
import { extend } from "./index";

export function scrollTodId (id, offset = 0) {
  scroller.scrollTo(id, {
    delay: 0,
    duration: 600,
    offset, // Scrolls to element + offset (-50) pixels down the page
    smooth: "easeInOutQuart"
  });
}

/**
 * used to scroll the form to the top of the page
 */
// function scrollToTop () {
//   scroll.scrollToTop({
//     duration : 600,
//     smooth : "easeInOutQuint"
//   });
// }

/**
 * Set CSS style on a given element
 * @param {Object} el
 * @param {Object | String} styles Style object with camel case property names
 * @param {String | Boolean} [multiSetType]
 * @static
 */
export const css = function (el, styles, multiSetType) {
  if (el && typeof el === "object") {
    if (styles && typeof styles === "object") {
      if (styles.opacity !== undefined) {
        styles.filter = "alpha(opacity=" + styles.opacity * 100 + ")";
      }

      if (multiSetType) {
        for (var key in styles) {
          var val = styles[key];
          if (typeof val === "number") {
            val = val.toString() + "px";
          }
          el.style[key] = val;
        }

        return el;
      }
      return extend(el.style, styles);
    } else {
      throw new Error("method css expects a styles object or a string to return the value of");
    }
  } else {
    throw new Error("method css expects an HTML Object");
  }
};
