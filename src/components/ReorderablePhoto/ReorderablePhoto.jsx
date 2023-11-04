import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { SinglePhoto } from "../SinglePhoto/SinglePhoto";
import "./ReorderablePhoto.css";
import { useState } from "react";

export const ReorderablePhoto = (props) => {
  const { url, index, faded, selected, onSelect, onDeselect } = props;
  const sortable = useSortable({ id: url });
  const { attributes, listeners, setNodeRef, transform, transition } = sortable;

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const [isChecked, setIsChecked] = useState(selected);

  const handleSelect = () => {
    if (isChecked) {
      onDeselect(url);
    } else {
      onSelect(url);
    }
    setIsChecked(!isChecked); // Toggle the checked state
  };

  const divStyle = {
    transformOrigin: "0 0",
    cursor: "pointer",
    gridRowStart: index === 0 ? "span 2" : null,
    gridColumnStart: index === 0 ? "span 2" : null,
    opacity: faded ? "0.1" : "1",
    ...style,
  };

  return (
    <label
      className={`photo-container ${isChecked ? "selected" : ""}`} // Apply "selected" class if isChecked is true
      onClick={handleSelect}
      style={divStyle}
    >
      <SinglePhoto
        ref={setNodeRef}
        url={url}
        {...props}
        {...attributes}
        {...listeners}
      />
      <input
        type="checkbox"
        checked={isChecked} // Use isChecked to control the checked state
        className="checkbox"
      />
    </label>
  );
};
