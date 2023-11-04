import { forwardRef } from "react";

export const Photo = forwardRef(
  (
    { url, selected, onSelect, onDeselect, index, faded, style, ...props },
    ref
  ) => {
    const inlinestyles = {
      border: "1px solid gray",
      borderRadius: "20px",
      width: "100%",
    };

    return <img ref={ref} style={inlinestyles} src={url} {...props} />;
  }
);
