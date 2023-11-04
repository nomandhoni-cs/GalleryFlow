import { forwardRef } from "react";
import "./SinglePhoto.css";

export const SinglePhoto = forwardRef(({ url, style, ...props }, ref) => {
  return <img className="single-photo" ref={ref} src={url} {...props} />;
});
