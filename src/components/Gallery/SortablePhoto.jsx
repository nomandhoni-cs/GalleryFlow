import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Photo } from "../Photo/Photo";
import "./SortablePhoto.css";

export const SortablePhoto = (props) => {
  const { url, index, faded, selected, onSelect, onDeselect } = props;
  const sortable = useSortable({ id: url });
  const { attributes, listeners, setNodeRef, transform, transition } = sortable;

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleSelect = () => {
    if (selected) {
      onDeselect(url);
    } else {
      onSelect(url);
    }
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
    <div
      className={`photo-container ${selected ? "selected" : ""}`}
      onClick={() => {
        if (selected) {
          onDeselect(url);
        } else {
          onSelect(url);
        }
      }}
      style={divStyle}
    >
      <Photo
        ref={setNodeRef}
        style={style}
        url={url}
        index={index}
        {...props}
        {...attributes}
        {...listeners}
      />
      <input
        type="checkbox"
        checked={selected}
        onChange={handleSelect}
        className="checkbox"
      />
    </div>
  );
};
