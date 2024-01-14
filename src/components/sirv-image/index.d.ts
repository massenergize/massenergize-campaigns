import { ReactElement } from "react";

type SirvImageProps = {
  src: string,
  alt: string,
  className?: string,
  style?: object,
  width?: number,
  maxWidth?: number,
  height?: number,
  maxHeight?: number,
  sizes?: string,
  srcSet?: string,
  loading?: 'auto' | 'lazy' | 'eager',
  role?: string,
  format?: 'webp' | 'png' | 'jpg' | 'gif' | 'svg'
}

export default function SirvImage (props: SirvImageProps): ReactElement {
}
