"use client";

import { cn } from "@/utils/helpers/cn";
import Image, { ImageProps, StaticImageData } from "next/image";
import { forwardRef, useEffect, useState } from "react";

type Props = ImageProps & {
  src?: string | StaticImageData;
  fallbackSrc?: string | StaticImageData;
  fallbackText?: string;
  className?: string;
};

const DEFAULT_IMAGE: StaticImageData | string = "/images/default-fallback.png";

const ImageComponent = forwardRef<HTMLImageElement, Props>(({
  src,
  alt,
  fallbackSrc,
  fallbackText,
  className = "",
  ...props
}, ref) => {
  const [imgSrc, setImgSrc] = useState<any>(
    src ? src : fallbackSrc || DEFAULT_IMAGE,
  );
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setImgSrc(src ? src : fallbackSrc || DEFAULT_IMAGE);
    setHasError(false);
  }, [src, fallbackSrc]);

  const handleError = () => {
    if (imgSrc !== fallbackSrc && fallbackSrc) {
      setImgSrc(fallbackSrc);
    } else if (imgSrc !== DEFAULT_IMAGE) {
      setImgSrc(DEFAULT_IMAGE);
    } else {
      setHasError(true);
    }
  };

  if (hasError && fallbackText) {
    return (
      <div className="flex items-center justify-center w-full h-full text-gray-500 text-sm">
        {fallbackText}
      </div>
    );
  }

  return (
    <img
      ref={ref}
      src={imgSrc?.src ?? imgSrc as any}
      alt={alt}
      onError={handleError}
      // unoptimized
      // width={props.width ?? 350}
      // height={props.height ?? 350}
      className={cn("w-full object-cover", className)}
      {...props}
    />
  );
})

export default ImageComponent