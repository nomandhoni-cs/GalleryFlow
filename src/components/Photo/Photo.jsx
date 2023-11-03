import { forwardRef } from "react";
import "./Photo.css";
export const Photo = forwardRef(
  ({ url, index, faded, style, ...props }, ref) => {
    const inlineStyles = {
      border: "1px solid gray",
      borderRadius: "20px",
      opacity: faded ? "0.1" : "1",
      transformOrigin: "0 0",
      cursor: "pointer",
      height: index === 0 ? 410 : 200,
      gridRowStart: index === 0 ? "span 2" : null,
      gridColumnStart: index === 0 ? "span 2" : null,
      ...style,
    };

    return <img ref={ref} style={inlineStyles} src={url} {...props} />;
  }
);
