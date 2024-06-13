import * as React from "react";

const Image = ({
  src,
  alt,
  width,
  height,
  className,
  fetchPriority,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
  fetchPriority: string;
}) => {
  return (
    <img src={src} alt={alt} width={width} height={height} className={className} data-fetchpriority={fetchPriority} />
  );
};

export default Image;
