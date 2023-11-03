import { forwardRef } from "react";
import "./Photo.css";
export const Photo = forwardRef(
  ({ url, index, faded, style, ...props }, ref) => {
    const inlineStyles = {
      width: "100%",
      height: "100%",
      border: "1px solid gray",
      borderRadius: "20px",
      opacity: faded ? "0.1" : "1",
      ...style,
    };
    return <img ref={ref} style={inlineStyles} src={url} {...props} />;
  }
);
