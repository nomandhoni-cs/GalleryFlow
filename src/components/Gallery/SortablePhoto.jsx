import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Photo } from "../Photo/Photo";
// import "./SortablePhoto.css"; // Add a separate CSS file
import "./Gallery.css"; // Add a separate CSS file

export const SortablePhoto = (props) => {
  const { url, index, selected, onSelect, onDeselect } = props;
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
  const inlinestyles = {
    transformOrigin: "0 0",
    cursor: "pointer",
    height: index === 0 ? 410 : 200,
    gridRowStart: index === 0 ? "span 2" : null,
    gridColumnStart: index === 0 ? "span 2" : null,
    ...style,
  };
  return (
    <div
      className={`photo-container ${selected ? "selected" : ""}`}
      style={inlinestyles}
      onClick={() => {
        if (selected) {
          onDeselect(url);
        } else {
          onSelect(url);
        }
      }}
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
      {/* <input
        type="checkbox"
        checked={selected}
        onChange={handleSelect}
        className="checkbox"
      /> */}
    </div>
  );
};
