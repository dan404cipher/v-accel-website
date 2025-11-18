"use client";

import Image, { type ImageProps } from "next/image";
import React, { useMemo, useState } from "react";
import type { StaticImageData } from "next/image";

const ERROR_IMG_SRC =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4K";

type BaseImageProps = Omit<ImageProps, "src" | "alt"> & {
  src: string | StaticImageData;
  alt: string;
};

export function ImageWithFallback({
  src,
  alt,
  className,
  fill,
  width,
  height,
  sizes = "100vw",
  ...props
}: BaseImageProps) {
  const [didError, setDidError] = useState(false);
  const [imgSrc, setImgSrc] = useState<typeof src>(src);

  const isStaticImage =
    typeof imgSrc === "object" && imgSrc !== null && "src" in imgSrc;

  const resolvedSrc = useMemo(() => {
    if (didError) return ERROR_IMG_SRC;
    if (isStaticImage) {
      return (imgSrc as StaticImageData).src;
    }
    return imgSrc as string;
  }, [didError, imgSrc, isStaticImage]);

  const handleError = () => {
    if (!didError) {
      setDidError(true);
      setImgSrc(ERROR_IMG_SRC);
    }
  };

  const staticData = isStaticImage ? (imgSrc as StaticImageData) : null;
  const derivedWidth = width ?? staticData?.width;
  const derivedHeight = height ?? staticData?.height;
  const canUseNextImage = !!staticData && !didError && derivedWidth && derivedHeight;

  if (canUseNextImage) {
    if (fill) {
      return (
        <div className="relative w-full h-full">
          <Image
            src={staticData!}
            alt={alt}
            fill
            sizes={sizes}
            onError={handleError}
            className={className}
            {...props}
          />
        </div>
      );
    }

    return (
      <Image
        src={staticData!}
        alt={alt}
        width={derivedWidth}
        height={derivedHeight}
        sizes={sizes}
        onError={handleError}
        className={className}
        {...props}
      />
    );
  }

  if (fill) {
    return (
      <div className="relative w-full h-full">
        <img
          src={resolvedSrc}
          alt={alt}
          onError={handleError}
          className={`absolute inset-0 h-full w-full object-cover ${className ?? ""}`}
          {...props}
        />
      </div>
    );
  }

  return (
    <img
      src={resolvedSrc}
      alt={alt}
      className={className}
      onError={handleError}
      width={width}
      height={height}
      loading={props.loading || "lazy"}
      {...props}
    />
  );
}

