import React from "react";
import { urlify } from "../../helpers/utils/string";

/**
 *
 * @param html
 * @param tag
 * @returns {JSX.Element}
 * @constructor
 */

const RenderHTML = ({ html, tag = "span", ...rest }) => {
  const CustomTag = `${tag}`;
  return <CustomTag dangerouslySetInnerHTML={{ __html : urlify(html)  }} {...rest}/>
};

export default RenderHTML;
