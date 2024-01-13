export function validateProps (src, alt, role) {
  if (!src) throw new Error("SirvImage: src is required for the image to be displayed");
  if (!alt) throw new Error("SirvImage: alt prop is required for accessibility purposes and SEO performance");

  // check if the image is a svg and a role=image and if so throw an error that says role="img" is required
  if (src.endsWith(".svg") && role !== "img") {
    throw new Error("SirvImage: SVGs must have a role='img' attribute");
  }
}

export function cleanImageSrc (src) {
  // remove any query params from the src
  src = src.split("?")[0].replace(/^\//, "");

  if (!src.startsWith("/")) {
    return src;
  } else {
    // remove any trailing slashes from the src
    return src.substring(1);
  }
}
