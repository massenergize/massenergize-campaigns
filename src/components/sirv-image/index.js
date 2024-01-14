import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { APP_PATHS } from "../../config/routes";
import { validateProps } from "./sirv-image-utils";

/**
 * This component is used to optimize images using the sirv cdn
 * @param props {{src: string, alt: string, width: number, height: number, role: string}}
 * @returns {JSX.Element}
 * @constructor
 */
export default function SirvImage (props) {
  const { alt, role } = props;
  let { src } = props;

  validateProps(src, alt, role);

  const {
    decoding = "async",
    loading = "lazy",
    blur = false,
    cx = null,
    cw = null,
    format = 'webp',
    width,
    ...rest
  } = props;
  const imageElRef = React.useRef(null);


  if (src.startsWith("/")) {
    src = src.substring(1);
  }


  const SCREEN_WIDTH = typeof window !== "undefined" ? window.innerWidth : 320;
  const ScreenSizes = [
    { min : 30, max : 640, width : 300 },
    { min : 640, max : 750, width : 640 },
    { min : 750, max : 828, width : 750 },
    { min : 828, max : 1080, width : 828 },
    { min : 1080, max : 1200, width : 1080 },
    { min : 1200, max : 1920, width : 1200 },
    { min : 1920, max : 2048, width : 1920 },
    { min : 2048, max : 3840, width : 2048 },
  ];
  const SourceSetSizes = [ 320, 640, 750, 828, 1080, 1200, 1920 ];
  const SOURCE_SET_SIZES_LEN = SourceSetSizes.length;

  let imageSrcWidth = 320;

  const [ srcSet, setSrcSet ] = useState(null);
  const [ imageSrc, setImageSrc ] = useState(blur ? `${APP_PATHS.SIRV_BASE_URL}/${src}?format=${format}&w=${imageSrcWidth / 2}${cx ? `&cx=${cx}` : ""}${cw ? `&cw=${cw}` : ""}` : null);


  imageSrcWidth = ScreenSizes.find((screen) => SCREEN_WIDTH >= screen.min && SCREEN_WIDTH < screen.max).width;


  useEffect(() => {
    function setSourceSet () {
      const CLOSEST_SOURCE_SET_SIZE = SourceSetSizes.reduce((prev, curr) => {
        return (Math.abs(curr - imageSrcWidth) < Math.abs(prev - imageSrcWidth) ? curr : prev);
      });

      const CLOSEST_SOURCE_SET_INDEX = SourceSetSizes.indexOf(CLOSEST_SOURCE_SET_SIZE);
      const SOURCE_SET_INDEX_LIMIT = SOURCE_SET_SIZES_LEN - CLOSEST_SOURCE_SET_INDEX >= 2 ? CLOSEST_SOURCE_SET_INDEX + 2 : SOURCE_SET_SIZES_LEN;

      let srcSetList = [];

      for (let i = 0; i < SOURCE_SET_INDEX_LIMIT; i++) {
        srcSetList.push(`${APP_PATHS.SIRV_BASE_URL}/${src}?format=webp&w=${SourceSetSizes[i]} ${SourceSetSizes[i]}w`);
      }

      const srcSetString = srcSetList.join(", ");

      if (loading === "lazy" && typeof IntersectionObserver !== "undefined") {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setImageSrc(`${APP_PATHS.SIRV_BASE_URL}/${src}?format=webp&w=${imageSrcWidth - 20}${cx ? `&cx=${cx}` : ""}${cw ? `&cw=${cw}` : ""}}`);
              setSrcSet(srcSetString);
              imageElRef?.current?.classList.remove("blurred-image");
            }
          });
        }, {
          rootMargin : "0px",
          threshold : 0.1
        });

        if (imageElRef.current) {
          observer.observe(imageElRef.current);

          if (blur) {
            imageElRef?.current?.classList.add("blurred-image");
          }
        }
      }
    }

    setSourceSet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ src ])

  const imageProps = {
    ...rest,
    decoding,
    elementtiming : "lazy",
    loading,
    src : imageSrc,
    srcSet,
    ...(role && { role }),
  }
  return (
    <img ref={imageElRef} alt={alt}  {...imageProps}/>
  );
}

SirvImage.propTypes = {
  alt : PropTypes.string.isRequired,
  blur : PropTypes.bool,
  height : PropTypes.number,
  loading : PropTypes.oneOf([ "eager", "lazy" ]),
  role : PropTypes.string,
  src : PropTypes.string.isRequired,
  width : PropTypes.number,
}
