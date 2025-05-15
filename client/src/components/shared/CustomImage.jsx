import React from "react";

const CustomImage = ({ src, alt, className, onClick, style = {} }) => {
  return (
    <img
      crossOrigin="anonymous"
      className={className}
      src={src}
      alt={alt}
      style={style}
      onClick={onClick}
    />
  );
};

export default CustomImage;
