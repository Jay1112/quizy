import { LazyLoadImage } from "react-lazy-load-image-component";

interface LazyImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  imageStyle?: string;
}

const LazyImage = ({
  src,
  alt,
  width,
  height,
  imageStyle = "",
}: LazyImageProps) => (
  <LazyLoadImage
    className={`${imageStyle}`}
    alt={alt}
    height={height}
    src={src}
    width={width}
  />
);

export default LazyImage;
