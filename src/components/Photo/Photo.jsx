import { forwardRef } from "react";

export const Photo = forwardRef(({ url, style, ...props }, ref) => {
  const inlinestyles = {
    width: "100%",
    height: "100%",
    backgroundColor: "#ffffff",
  };

  return <img ref={ref} style={inlinestyles} src={url} {...props} />;
});
